package com.example;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.PathParam;
/**
 * Root resource (exposed at "myput" path)
 */
@Path("greeting/{username}")
public class MyPut {

    /**
     * Method handling HTTP GET requests. The returned object will be sent
     * to the client as "text/plain" media type.
     *
     * @return String that will be returned as a text/plain response.
     */

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String ReturnIt(@PathParam("username") String userName) {
        return userName + ", hello!";
    }
}