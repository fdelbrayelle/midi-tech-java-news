package fr.delbrayelle.java9.news;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class NouveautesCollectors {

    public static void main(String[] args) {

        // Collectors::filtering
        System.out.println("Collectors::filtering");
        List.of(2, 4, 6, 8, 10, 12).stream()
                .collect(Collectors.filtering(i -> i % 4 == 0,
                        Collectors.toList()))
                .forEach(System.out::println);


        // Collectors::flatMapping
        System.out.println("Collectors::flatMapping");
        Stream.of(List.of(1, 2, 3, 4), List.of(5, 6, 7, 8))
                .collect(Collectors.flatMapping(
                        l -> l.stream()
                                .filter(i -> i % 2 == 0),
                        Collectors.toList()
                ))
                .forEach(System.out::println);
    }
}
