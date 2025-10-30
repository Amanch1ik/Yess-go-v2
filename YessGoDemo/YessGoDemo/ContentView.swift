import SwiftUI
import Combine

struct ContentView: View {
    @EnvironmentObject var authService: AuthService

    var body: some View {
        Group {
            if authService.isAuthenticated {
                MainTabView()
            } else {
                LoginView()
            }
        }
    }
}

struct MainTabView: View {
    @State private var selectedTab = 0

    var body: some View {
        TabView(selection: $selectedTab) {
            MainPageView()
                .tabItem {
                    Image(systemName: "house.fill")
                    Text("Главная")
                }
                .tag(0)

            PartnersPageView()
                .tabItem {
                    Image(systemName: "building.2.fill")
                    Text("Партнеры")
                }
                .tag(1)

            QRPageView()
                .tabItem {
                    Image(systemName: "qrcode")
                    Text("QR")
                }
                .tag(2)

            NotificationsPageView()
                .tabItem {
                    Image(systemName: "bell.fill")
                    Text("Уведомления")
                }
                .tag(3)

            MorePageView()
                .tabItem {
                    Image(systemName: "ellipsis")
                    Text("Еще")
                }
                .tag(4)
        }
        .accentColor(Color(hex: "0F6B53"))
    }
}

struct PartnersPageView: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("Партнеры")
                    .font(.title)
                    .padding()

                Text("Здесь будет список партнеров")
                    .foregroundColor(.gray)
            }
            .navigationTitle("Партнеры")
        }
    }
}

struct QRPageView: View {
    var body: some View {
        NavigationView {
            VStack {
                Image(systemName: "qrcode")
                    .resizable()
                    .frame(width: 200, height: 200)
                    .padding()

                Text("QR-сканер")
                    .font(.title)

                Text("Отсканируйте QR-код у партнера для получения бонусов")
                    .multilineTextAlignment(.center)
                    .foregroundColor(.gray)
                    .padding()
            }
            .navigationTitle("QR Код")
        }
    }
}

struct NotificationsPageView: View {
    var body: some View {
        NavigationView {
            VStack {
                Image(systemName: "bell.fill")
                    .resizable()
                    .frame(width: 100, height: 100)
                    .foregroundColor(Color(hex: "0F6B53"))
                    .padding()

                Text("Нет новых уведомлений")
                    .font(.headline)

                Text("Здесь будут отображаться важные уведомления")
                    .multilineTextAlignment(.center)
                    .foregroundColor(.gray)
                    .padding()
            }
            .navigationTitle("Уведомления")
        }
    }
}

struct MorePageView: View {
    @EnvironmentObject var authService: AuthService

    var body: some View {
        NavigationView {
            List {
                Section(header: Text("Аккаунт")) {
                    NavigationLink(destination: Text("Профиль")) {
                        Label("Мой профиль", systemImage: "person.circle")
                    }
                    NavigationLink(destination: Text("Настройки")) {
                        Label("Настройки", systemImage: "gear")
                    }
                }

                Section(header: Text("Информация")) {
                    NavigationLink(destination: Text("О приложении")) {
                        Label("О приложении", systemImage: "info.circle")
                    }
                    NavigationLink(destination: Text("Помощь")) {
                        Label("Помощь", systemImage: "questionmark.circle")
                    }
                }

                Section {
                    Button(action: {
                        authService.signOut()
                    }) {
                        Label("Выйти", systemImage: "arrow.right.square")
                            .foregroundColor(.red)
                    }
                }
            }
            .navigationTitle("Еще")
        }
    }
}

struct LoginView: View {
    @StateObject private var authService = AuthService.shared
    @State private var email = ""
    @State private var password = ""
    @State private var rememberMe = false
    @State private var isLoading = false
    @State private var showAlert = false
    @State private var alertMessage = ""
    @State private var cancellables = Set<AnyCancellable>()

    var body: some View {
        NavigationView {
            VStack(spacing: 24) {
                Spacer()

                Image(systemName: "leaf.circle.fill")
                    .resizable()
                    .aspectRatio(contentMode: .fit)
                    .frame(height: 80)
                    .foregroundColor(Color(hex: "0F6B53"))

                Text("YessGo")
                    .font(.largeTitle)
                    .fontWeight(.bold)
                    .foregroundColor(Color(hex: "0F6B53"))

                Text("Demo Version")
                    .font(.subheadline)
                    .foregroundColor(.gray)

                VStack(spacing: 16) {
                    TextField("Email", text: $email)
                        .textFieldStyle(RoundedBorderTextFieldStyle())
                        .keyboardType(.emailAddress)
                        .autocapitalization(.none)
                        .padding(.horizontal)

                    SecureField("Пароль", text: $password)
                        .textFieldStyle(RoundedBorderTextFieldStyle())
                        .padding(.horizontal)

                    HStack {
                        Toggle("Запомнить меня", isOn: $rememberMe)
                            .toggleStyle(SwitchToggleStyle(tint: Color(hex: "0F6B53")))

                        Spacer()
                    }
                    .padding(.horizontal)

                    Button(action: signIn) {
                        if isLoading {
                            ProgressView()
                                .progressViewStyle(CircularProgressViewStyle(tint: .white))
                        } else {
                            Text("Войти")
                                .fontWeight(.semibold)
                        }
                    }
                    .frame(maxWidth: .infinity)
                    .padding()
                    .background(Color(hex: "0F6B53"))
                    .foregroundColor(.white)
                    .cornerRadius(10)
                    .padding(.horizontal)
                    .disabled(isLoading)

                    Button("Войти как демо") {
                        demoLogin()
                    }
                    .foregroundColor(Color(hex: "0F6B53"))
                }
                .padding(.horizontal, 16)

                Spacer()
            }
            .padding()
            .alert("Ошибка", isPresented: $showAlert) {
                Button("OK") { }
            } message: {
                Text(alertMessage)
            }
        }
    }

    private func signIn() {
        guard !email.isEmpty && !password.isEmpty else {
            alertMessage = "Заполните все поля"
            showAlert = true
            return
        }

        isLoading = true

        authService.signIn(email: email, password: password, remember: rememberMe)
            .receive(on: DispatchQueue.main)
            .sink(
                receiveCompletion: { completion in
                    isLoading = false
                    if case .failure(let error) = completion {
                        alertMessage = error.localizedDescription
                        showAlert = true
                    }
                },
                receiveValue: { _ in
                }
            )
            .store(in: &cancellables)
    }

    private func demoLogin() {
        email = "demo@yessgo.com"
        password = "demo123"
        authService.isAuthenticated = true
    }
}

#Preview {
    ContentView()
        .environmentObject(AuthService.shared)
}
