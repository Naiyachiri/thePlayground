// we are going to make a VideoGame class, which has 3 fields for basic information
// seven methods, 
    // three to modify the fields
    // five to show the fields (singularly, and altogether)
import java.util.*;
import java.util.ArrayList;
import java.util.ArrayList.*;

public class VideoGame {
    //fields: genre, platform, player
    public String name;
    public String genre;
    public ArrayList<String> platforms = new ArrayList<String>();
    public String platformList = "Platforms: "; // string form of our arrayList to be printed out
    public String numberOfPlayers;
    public String fullInformation = ""; // holds a compiled string of all the fields
    //constructor takes genre, an arraylist and a numberofplayers

    public VideoGame (String givenName, String givenGenre, ArrayList<String> givenPlatform, String givenNumberOfPlayers) {
        name = givenName; // sets name to given String
        genre = givenGenre; // sets genre to given String
        platforms = givenPlatform; // sets platforms to the given ArrayList
        numberOfPlayers = givenNumberOfPlayers; // sets numberOfPlayers to String
    }
    //modifying methods
    public void setGenre(String newGenre) {
        genre = newGenre; // method to change genre
    }
    public void addPlatform(String addedPlatform) { 
        platforms.add(addedPlatform); // takes given string and adds it to our ArrayList
    }
    public void addPlatform(String[] addedPlatforms) {
        if (addedPlatforms.length == 1) {
            platforms.add(addedPlatforms[0]);
        } else if (addedPlatforms.length > 1) { // if an array is passed it will add each element of the array to the ArrayList
            for (String addedPlatform : addedPlatforms) {
                platforms.add(addedPlatform);
            }
        }
    }
    public void setName(String newName) {
        name = newName; // changes name
    }
    public void setNumberOfPlayers(String newNumberOfPlayers) {
        numberOfPlayers = newNumberOfPlayers;
    }
    // show methods
    public void showName() {
        System.out.println("Name: " + this.name);
    }
    public void showGenre() {
        System.out.println("Genre: " +this.genre);
    }
    public void showPlatforms() { // convert it to an array and/or a string to print
        int platformSize = platforms.size(); // saves the length of the array list for use below
        if (platforms.size() > 2) {
            // multiplatform print
            for (int i = 0; i < platformSize ; i++) {
                if (i == platformSize-1) { // when it reaches the end of arraylist
                    platformList += "and " + platforms.get(i) + "."; // gets the specified ArrayList item
                    break; // ignore the rest and complete the loop
                } // otherwise simply add the platform type to our arraylist
                platformList += platforms.get(i) + ", ";
            }
        } else if (platformSize == 1){
            platformList = platforms.get(0);
        } else if (platformSize == 2) {
            platformList += platforms.get(0) + " and " + platforms.get(1);
        }
        System.out.println("Platforms: " + platformList);
    }
    public void showNumberOfPlayers() {
        System.out.println("Players: " + this.numberOfPlayers);
    }
    public void showAll() { // calls all the show methods in sequence
        this.showName();
        this.showGenre();
        this.showPlatforms();
        this.showNumberOfPlayers();
    }

    public static void main(String[] args) { // main to see if it works properly
        ArrayList<String> lolPlatforms = new ArrayList<String>();
        lolPlatforms.add("PC/Mac"); // create an array list and add PC/MAC to it

        VideoGame LoL = new VideoGame("League of Legends", "MOBA", lolPlatforms, "Multiplayer"); // instantiate our videogame subclass LoL with specified fields
        LoL.addPlatform("PS4");
        LoL.showAll(); // print all the information of the game
    }
}