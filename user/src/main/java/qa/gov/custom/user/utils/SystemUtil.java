package qa.gov.custom.user.utils;

import qa.gov.custom.user.models.NotificationModel;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;

public class SystemUtil {
    public static String getUUID() {
        UUID uuid = UUID.randomUUID();
        return uuid.toString();
    }


    static public String getFileName(String ext) {
        String logFileName = new SimpleDateFormat("yyyyMMddHHmm").format(new Date());
        String fileName= logFileName+"_"+getUUID()+ext;
        return fileName;
    }

    static public NotificationModel createNotification(String email,
                                         String emailSubject,
                                         String message,
                                         String mobileNumber) {
        NotificationModel notificationModel = new NotificationModel();
        notificationModel.setEmailBody(message);
        notificationModel.setSmsBody(message);
        notificationModel.setToAddress(email);
        notificationModel.setEmailSubject(emailSubject);
        notificationModel.setPhoneNumber(mobileNumber);
        if (emailSubject != null) {
            notificationModel.setIsEmail(1);
        } else {
            notificationModel.setIsEmail(0);
        }
        if (mobileNumber != null) {
            notificationModel.setIsSMS(1);
        } else {
            notificationModel.setIsSMS(0);
        }
        return notificationModel;
    }
}
