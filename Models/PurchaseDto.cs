using System.Text.Json.Serialization;

namespace YessGoFront.Models;

/// <summary>������� ��� ������� ����������.</summary>
public class PurchaseDto
{
    [JsonPropertyName("id")] public string Id { get; set; } = string.Empty;
    [JsonPropertyName("partnerId")] public string PartnerId { get; set; } = string.Empty;
    [JsonPropertyName("partnerName")] public string? PartnerName { get; set; }

    [JsonPropertyName("amount")] public decimal Amount { get; set; }
    [JsonPropertyName("dateUtc")] public DateTime DateUtc { get; set; }

    [JsonPropertyName("cashbackPercent")] public double CashbackPercent { get; set; }
    [JsonPropertyName("cashbackAmount")] public decimal CashbackAmount { get; set; }  // � ������
    [JsonPropertyName("yessCoins")] public decimal YessCoins { get; set; }       // � �������, ���� ����
}
