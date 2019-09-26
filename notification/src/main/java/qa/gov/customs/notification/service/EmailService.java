package qa.gov.customs.notification.service;

import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Date;
import java.util.Properties;


import javax.mail.Message;
        import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
        import javax.mail.Session;
        import javax.mail.Transport;
        import javax.mail.internet.AddressException;
        import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import qa.gov.customs.notification.model.NotificationModel;


@Service
public class EmailService {

    public void testMail() throws AddressException, MessagingException, IOException {
        Properties props = new Properties();
        props.put("mail.smtp.host", "HQ-MAILSERV1.cpga.net.qa");
        props.put("mail.smtp.port", "25"); // 25
        Session session = Session.getInstance(props, new javax.mail.Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication("ci-test", "C!test123");
            }
        });
        Message msg = new MimeMessage(session);
        msg.setFrom(new InternetAddress("ci-test@customs.gov.qa", true));

        msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse("sraj@customs.gov.qa"));
        msg.setSubject("Test email");
        msg.setContent("Test email body", "text/html");
        msg.setSentDate(new Date());
        Transport.send(msg);
    }

    public void sendmail(NotificationModel model) throws AddressException, MessagingException, IOException {
        Properties props = new Properties();
        props.put("mail.smtp.host", "HQ-MAILSERV1.cpga.net.qa");
        props.put("mail.smtp.port", "25"); // 25
        Session session = Session.getInstance(props, new javax.mail.Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication("ci-test", "C!test123");
            }
        });
        Message msg = new MimeMessage(session);
        msg.setFrom(new InternetAddress("ci-test@customs.gov.qa", true));
        msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(model.getToAddress()));
        msg.setSubject(model.getEmailSubject());
        msg.setContent(model.getEmailBody(), "text/html");
        msg.setSentDate(new Date());
        Transport.send(msg);
    }

}
