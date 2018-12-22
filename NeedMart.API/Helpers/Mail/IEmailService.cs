using System.Collections.Generic;

namespace NeedMart.API.Helpers.Mail
{
    public interface IEmailService
    {
        void Send(EmailMessage emailMessage);
	    List<EmailMessage> ReceiveEmail(int maxCount = 10);
    }
}