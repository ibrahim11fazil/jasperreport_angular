package qa.gov.customs.gateway;

import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
        return 1;
    }


    @Override
    public Object run() {
        RequestContext context = RequestContext.getCurrentContext();
        if ((context.get("proxy") != null) && context.get("proxy").equals("authentication")) {
            addFilter("grant_type", "password");
            return null;
        } else if ((context.get("proxy") != null) && context.get("proxy").equals("authrefresh")) {
            addFilter("grant_type", "refresh_token");
            return null;
        } else {
            return null;
        }
    }

    Object addFilter(String keyType, String valueType) {
        RequestContext context = RequestContext.getCurrentContext();
        context.addZuulRequestHeader("Authorization", "Basic VVNFUl9DTElFTlRfQVBQOnBhc3N3b3JkQDIwMTg=");
        HttpServletResponse servletResponse = context.getResponse();
        Map<String, List<String>> newParameterMap = new HashMap<>();
        Map<String, String[]> parameterMap = context.getRequest().getParameterMap();
        //getting the current parameter
        if (parameterMap != null)
            for (Map.Entry<String, String[]> entry : parameterMap.entrySet()) {
                String key = entry.getKey();
                String[] values = entry.getValue();
                newParameterMap.put(key, Arrays.asList(values));
            }
        //add a new parameter
        String key = keyType;
        String value = valueType;
        newParameterMap.put(key, Arrays.asList(value));
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

        if ((ctx.get("proxy") != null) && (ctx.get("proxy").equals("authentication") ||
                ctx.get("proxy").equals("authrefresh"))) {
            return true;
        }
        return false;
    }

}
