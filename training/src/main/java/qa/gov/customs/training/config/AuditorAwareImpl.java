package qa.gov.customs.training.config;

import org.springframework.data.domain.AuditorAware;
import org.springframework.security.core.context.SecurityContextHolder;
import qa.gov.customs.training.security.CustomPrincipal;

import java.util.Optional;

public class AuditorAwareImpl implements AuditorAware<String> {

    @Override
    public Optional<String> getCurrentAuditor() {
        try{
            //TODO need update with usercode ,audit logs
            String str=  ((CustomPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getEmail();
            Optional<String> ostr = Optional.ofNullable(str)
                    .map(s -> s.isEmpty()?null:s);
            return ostr;
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }
}