using System.Threading.Tasks;

namespace NeedMart.API.Helpers.SMS
{
    public interface ISmsService
    {
         Task<string> postXMLData(string destinationUrl, string requestXml);
         string ParseXML(string xmlString);
    }
}