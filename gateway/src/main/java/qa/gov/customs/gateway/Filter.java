package qa.gov.customs.gateway;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.*;

import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;
import org.springframework.cloud.netflix.zuul.filters.support.FilterConstants;
import org.springframework.stereotype.Component;

import static org.springframework.cloud.netflix.zuul.filters.support.FilterConstants.*;

@Component
public class Filter extends ZuulFilter {

    private static Logger log = LoggerFactory.getLogger(Filter.class);


    @Override
    public String filterType() {
        //very important
        return "route";
    }

    @Override
    public int filterOrder() {
        return 1 ;
    }


    @Override
    public Object run()
    {
        //TODO This should be from DB or from config
        RequestContext context = RequestContext.getCurrentContext();
        context.addZuulRequestHeader("Authorization", "Basic VVNFUl9DTElFTlRfQVBQOnBhc3N3b3JkQDIwMTg=");
        //context.addZuulResponseHeader("Authorization", "Basic VVNFUl9DTElFTlRfQVBQOnBhc3N3b3JkQDIwMTg=");
         HttpServletResponse servletResponse = context.getResponse();

        Map<String, List<String>> newParameterMap = new HashMap<>();
        Map<String, String[]> parameterMap = context.getRequest().getParameterMap();
        //getting the current parameter
        for (Map.Entry<String, String[]> entry : parameterMap.entrySet()) {
            String key = entry.getKey();
            String[] values = entry.getValue();
            newParameterMap.put(key, Arrays.asList(values));
        }
        //add a new parameter
        String key = "grant_type";
        String value = "password";
        newParameterMap.put(key,Arrays.asList(value));
        context.setRequestQueryParams(newParameterMap);
        log.info("Authorization: adding and grant_type adding");
        return null;

    }

//    @Override
//    public int filterOrder() {
//        return 10;
//    }

    @Override
    public boolean shouldFilter() {
        RequestContext ctx = RequestContext.getCurrentContext();

        if ((ctx.get("proxy") != null) && ctx.get("proxy").equals("authentication")) {
            return true;
        }
        return false;
    }

}
