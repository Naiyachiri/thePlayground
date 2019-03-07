package com.example;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.PathParam;
import java.lang.String;

@Path("showdog/{options}")
public class showDog {

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String printDogInfo(@PathParam("options") String options) {
        String[] DogDB = {"Poodle", "Shiba Inu", "German Shepard", "Maltese"};

        String result = "We have ";
        if (options.length() > 1) {
            result = "We have " + String.join(", ", DogDB);
        } else if (options.length() == 1) {
            int index = Integer.parseInt(options)-1;
            result = DogDB[index]; // gave user instructions to use 1-4 for colliquial numeration
        }

        return result;
    }
}