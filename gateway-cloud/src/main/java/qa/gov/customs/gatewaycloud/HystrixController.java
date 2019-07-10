package qa.gov.customs.gatewaycloud;

import org.springframework.http.ResponseEntity;
        import org.springframework.web.bind.annotation.GetMapping;
        import org.springframework.web.bind.annotation.RequestMapping;
        import org.springframework.web.bind.annotation.RestController;

        import java.util.Arrays;
        import java.util.List;

@RestController
@RequestMapping("/fallback")
public class HystrixController {

    @GetMapping("/server")
    public ResponseEntity<List> requestFallBack(){
        return ResponseEntity.ok(Arrays.asList());
    }
}