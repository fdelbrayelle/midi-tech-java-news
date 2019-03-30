package fr.delbrayelle.java9.news;

import java.time.LocalDate;

public class NouveautesJavaTime {

    public static void main(String[] args) {

        // LocalDate::datesUntil
        LocalDate date = LocalDate.of(2019, 4, 9);
        date.datesUntil(date.plusDays(7))
                .forEach(System.out::println);
    }
}
