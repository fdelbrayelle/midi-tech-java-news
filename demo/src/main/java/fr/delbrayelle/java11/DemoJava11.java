package fr.delbrayelle.java11;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.function.BiFunction;

public class DemoJava11 {

    public static void main(String[] args) {

        // Local-variable syntax for lambda parameters - JEP 323
        new Calculator().calc((@MyAnnotation var a, @MyAnnotation var b) -> ": " + (a * b), 3, 5);

        // HTTP Client - JEP 321
        final var httpClient = HttpClient.newBuilder().version(HttpClient.Version.HTTP_2).build();

        final var request = HttpRequest.newBuilder().uri(URI.create("https://yesno.wtf/api")).GET().build();

        final String response;
        try {
            response = httpClient.send(request, HttpResponse.BodyHandlers.ofString()).body();
            System.out.println(response);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // Nouveautés String
        String str = "pom ";
        System.out.println(str.repeat(4));

        String stringWithSpaces = "    String with spaces    ";
        System.out.println(stringWithSpaces.strip()); // trim() avec prise en compte d'Unicode

        System.out.println(str.isBlank()); // <-> str.trim().isEmpty()
        System.out.println("".isBlank());

        String words = "This is a sentence\npal!";
        words.lines().forEach(System.out::println);
    }

    public @interface MyAnnotation {
    }

    static class Calculator {
        public String calc(BiFunction<Integer, Integer, String> bi, Integer a, Integer b) {
            return bi.apply(a, b);
        }
    }
}
