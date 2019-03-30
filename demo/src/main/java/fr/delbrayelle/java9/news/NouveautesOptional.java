package fr.delbrayelle.java9.news;

import java.util.Optional;

public class NouveautesOptional {

    public static void main(String[] args) {

        // Optional::or
        Optional<String> stringOptional = Optional.of("test");
        System.out.println(stringOptional.or(() -> Optional.of("toto")));
        System.out.println(Optional.empty().or(() -> Optional.of("toto")));

        // Optional::ifPresentOrElse
        stringOptional.ifPresentOrElse(
                opt -> System.out.println(opt),
                () -> System.out.println("absent")
        );
        Optional.empty().ifPresentOrElse(
                opt -> System.out.println(opt),
                () -> System.out.println("absent")
        );
    }
}
