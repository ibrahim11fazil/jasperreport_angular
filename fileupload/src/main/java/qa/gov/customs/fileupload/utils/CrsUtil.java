package qa.gov.customs.fileupload.utils;

import org.springframework.web.multipart.MultipartFile;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;

public class CrsUtil {

	public static String getUUID() {
		UUID uuid = UUID.randomUUID();
		return uuid.toString();
	}
	
	
	static public String getFileName(String ext) {
		String logFileName = new SimpleDateFormat("yyyyMMddHHmm").format(new Date());
		String fileName= logFileName+"_"+getUUID()+ext;
		return fileName;
	}
	
	static public String getFileExtension(MultipartFile file) {
	    String name = file.getOriginalFilename();
	    int lastIndexOf = name.lastIndexOf(".");
	    if (lastIndexOf == -1) {
	        return ""; // empty extension
	    }
	    return name.substring(lastIndexOf);
	}
	
}
