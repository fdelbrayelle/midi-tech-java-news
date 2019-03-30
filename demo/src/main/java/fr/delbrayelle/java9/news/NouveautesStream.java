package fr.delbrayelle.java9.news;

import java.util.stream.Stream;

public class NouveautesStream {

    public static void main(String[] args) {

        // Avant Java 9
        Stream.iterate(0, i -> i + 1).limit(10)
                .forEach(System.out::println);

        // Après Java 9
        Stream.iterate(0, i -> i < 10, i -> i + 1)
                .forEach(System.out::println);
    }

}
