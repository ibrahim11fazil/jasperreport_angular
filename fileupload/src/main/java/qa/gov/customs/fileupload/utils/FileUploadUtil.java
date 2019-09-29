package qa.gov.customs.fileupload.utils;

import org.springframework.web.multipart.MultipartFile;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.UUID;

public class FileUploadUtil {

	public static String getUUID() {
		UUID uuid = UUID.randomUUID();
		return uuid.toString();
	}
	
	
	static public String getFileName(String ext) {
		String logFileName = new SimpleDateFormat("yyyyMMddHHmm").format(new Date());
		String fileName= logFileName+"_"+getUUID()+ext;
		return fileName;
	}

	static public String getDateInString(){
		Date date = Calendar.getInstance().getTime();
		DateFormat dateFormat = new SimpleDateFormat("dd-mm-yyyy");
		String strDate = dateFormat.format(date);
		return strDate;
	}

	static public String getFileExtension(MultipartFile file) {
	    String name = file.getOriginalFilename();
	    int lastIndexOf = name.lastIndexOf(".");
	    if (lastIndexOf == -1) {
	        return ""; // empty extension
	    }
	    return name.substring(lastIndexOf);
	}

	static public Date stringToDateForCertifiate(String certDate) throws Exception{
		//String sDate1="31/12/1998";
		Date date=new SimpleDateFormat("mm-dd-yyyy").parse(certDate);
		return date;
	}
	
}
