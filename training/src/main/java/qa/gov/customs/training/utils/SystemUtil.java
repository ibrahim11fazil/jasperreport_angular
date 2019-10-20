package qa.gov.customs.training.utils;

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
        String fileName = logFileName + "_" + getUUID() + ext;
        return fileName;
    }
}
