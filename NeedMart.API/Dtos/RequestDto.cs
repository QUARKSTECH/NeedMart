namespace NeedMart.API.Dtos
{
    public class RequestDto
    {
        public string RequestType { get; set; }
        public string ServiceCategory { get; set; }
        public string PartNumber { get; set; }
        public string MachineModel { get; set; }
    }
}