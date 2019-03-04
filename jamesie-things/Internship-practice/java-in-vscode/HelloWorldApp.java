
class HelloWorldApp {
    public static void main(String[] args) { // this is the known as the main method and is required in every class; The signature is public stat void main(String[] args)
        // the array is how java passes arguments to your class. (ie. java HelloWorldApp arg1 arg2)
        // single line comment
        /** documentation comments
         * this is a simple Class which returns "Hello World!" 
        */
        /* multiline comment*/
        String[] catArray = {"test", "is", "cat"};
        for (String word : catArray) {
            System.out.println(word);
        }

        System.out.println("Hola Mundo!"); //display given string

    }
}