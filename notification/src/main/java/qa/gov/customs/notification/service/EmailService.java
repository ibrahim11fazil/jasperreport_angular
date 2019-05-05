package qa.gov.customs.notification.service;

import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Date;
import java.util.Properties;


        import java.io.IOException;
        import java.util.Date;
        import java.util.Properties;

        import javax.mail.Message;
        import javax.mail.MessagingException;
        import javax.mail.Multipart;
        import javax.mail.PasswordAuthentication;
        import javax.mail.Session;
        import javax.mail.Transport;
        import javax.mail.internet.AddressException;
        import javax.mail.internet.InternetAddress;
        import javax.mail.internet.MimeBodyPart;
        import javax.mail.internet.MimeMessage;
        import javax.mail.internet.MimeMultipart;

        import org.springframework.stereotype.Service;


@Service
public class EmailService {

    public void sendmail() throws AddressException, MessagingException, IOException {
        Properties props = new Properties();
        // props.put("mail.smtp.auth", "false");
        // props.put("mail.smtp.starttls.enable", "false");
        props.put("mail.smtp.host", "HQ-MAILSERV1.cpga.net.qa");
        props.put("mail.smtp.port", "25"); // 25

        //("ci-test","C!test123");
        Session session = Session.getInstance(props, new javax.mail.Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication("ci-test", "C!test123");
            }
        });
        Message msg = new MimeMessage(session);
        msg.setFrom(new InternetAddress("ci-test@customs.gov.qa", true));

        msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse("sraj@customs.gov.qa"));
        // msg.setFrom("ci-test@customs.gov.qa");
        msg.setSubject("Tutorials point email");
        msg.setContent("Tutorials point email", "text/html");
        msg.setSentDate(new Date());

        //MimeBodyPart messageBodyPart = new MimeBodyPart();
        //messageBodyPart.setContent("Test Email", "text/html");

        //Multipart multipart = new MimeMultipart();
        //multipart.addBodyPart(messageBodyPart);
        //MimeBodyPart attachPart = new MimeBodyPart();

        //attachPart.attachFile("/var/tmp/image19.png");
        //multipart.addBodyPart(attachPart);
        // msg.setContent(multipart);
        Transport.send(msg);
    }

}
