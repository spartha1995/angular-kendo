
using Hangfire;
using MimeKit;
using System;
using System.Collections.Generic;
using MailKit.Net.Smtp;
using System.Threading.Tasks;

namespace dotnetcoreandAngular5.Services
{
    public class HangFireRepository : IHangFireRepository
    {
        public object  HangFireJobClass { get; private set; }

        public async Task  HangFireJobExecute()
        {
             BackgroundJob.Enqueue(() => SendMail());
        }

        private void SendMail()
        {
                try
                {
                    #region variables

                    //From Address 
                    string FromAddress = "partha@promactinfo.com";
                    string FromAdressTitle = "Title";

                    //To Address 
                    List<string> ToAddress = new List<string>() { "partha@promactinfo.com" };

                    string Subject = "Test Mail";
                    string BodyContent = "Test Purpose";

                    //Smtp Server 
                    string SmtpServer = "webmail.promactinfo.com";
                    //Smtp Port Number 
                    int SmtpPortNumber = 587;

                    #endregion

                    var mimeMessage = new MimeMessage();
                    mimeMessage.From.Add(new MailboxAddress(FromAdressTitle, FromAddress));
                    foreach (var item in ToAddress)
                    {
                        mimeMessage.To.Add(new MailboxAddress(item));
                    }

                    mimeMessage.Subject = Subject;
                    mimeMessage.Body = new TextPart("plain")
                    {
                        Text = BodyContent

                    };

                    using (var client = new SmtpClient())
                    {
                        client.Connect(SmtpServer, SmtpPortNumber, false);
                        // Note: only needed if the SMTP server requires authentication 
                        // Error 5.5.1 Authentication  
                        client.Authenticate("support@promactinfo.com", "Promact2016");
                        client.Send(mimeMessage);
                        Console.WriteLine("The mail has been sent successfully !!");
                        Console.ReadLine();
                        client.Disconnect(true);

                    }
                }
                catch (Exception ex)
                {

                    throw ex;
            }
        }


    }
}
