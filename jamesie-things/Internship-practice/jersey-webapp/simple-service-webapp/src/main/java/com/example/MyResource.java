package com.example;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 * Root resource (exposed at "myresource" path)
 */
/**
 * attempting to allow the api to take two different requests at the same URI @/myresource
 */

@Path("myresource")
public class MyResource {
    // basic data that we will attempt to manipulate or pull infomation from
    
    /**
     * Method handling HTTP GET requests. The returned object will be sent
     * to the client as "text/plain" media type.
     *
     * @return String that will be returned as a text/plain response.
     */
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String getIt() {
        return "0.1.4 Got it!\n" +
            "0.1.5 Added Dog Database" +
            "\n0.1.6.2 implementing showdog get request which conditionally generates a list or a single dog dependent on parameter length";
    }

    /** */
}