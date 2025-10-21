using CommunityToolkit.Mvvm.ComponentModel;

namespace YessGoFront.ViewModels;

// ���� ��� VM � ���������� ��������
public partial class BaseViewModel : ObservableObject
{
    [ObservableProperty]
    private string title = string.Empty;
}
