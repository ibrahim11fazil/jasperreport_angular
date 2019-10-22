package qa.gov.customs.training.controller;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
import qa.gov.customs.training.utils.models.ResponseException;

import java.util.Date;


@ControllerAdvice
@RestController
public class ControllerExceptionAdvice extends ResponseEntityExceptionHandler {


    @ExceptionHandler(Exception.class)
    public ResponseEntity<Object> handleAllException(Exception ex, WebRequest request) throws Exception {
        ResponseException responseException = new ResponseException(new Date(), ex.getMessage(), request.getDescription(true), false);
        ex.printStackTrace();
        //TODO Log this exception
        return new ResponseEntity<>(responseException, HttpStatus.INTERNAL_SERVER_ERROR);
    }


    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        String message = "";
        try {
            message = ex.getBindingResult().getAllErrors().get(0).getDefaultMessage();
            //TODO get all the error list
        } catch (Exception e) {
            e.printStackTrace();
        }
        ResponseException responseException = new ResponseException(new Date(), "Validation failed: " + message, ex.getMessage(), false);
        return new ResponseEntity(responseException, HttpStatus.BAD_REQUEST);
    }

//    @ExceptionHandler(HttpMessageNotReadableException.class)
//    public void handleException() {
//        String message ="";
//        try {
//           // message = ex.getBindingResult().getAllErrors().get(0).getDefaultMessage();
//            //TODO get all the error list
//        }catch (Exception e)
//        {
//            e.printStackTrace();
//        }
//        ResponseException responseException = new ResponseException(new Date(), "Invalid Input", "Please check the JSON", false);
//       // return new ResponseEntity(responseException, HttpStatus.BAD_REQUEST);
//    }


//    @ExceptionHandler(value = { HttpMessageNotReadableException.class })
//    @ResponseStatus(HttpStatus.BAD_REQUEST)
//    public ResponseEntity<Object> unKnownException(Exception ex)
//    {
//        ResponseException responseException = new ResponseException(new Date(), "INVALID","CHECK JSON INPUT", false);
//        return new ResponseEntity(responseException, HttpStatus.BAD_REQUEST);
//    }

}
