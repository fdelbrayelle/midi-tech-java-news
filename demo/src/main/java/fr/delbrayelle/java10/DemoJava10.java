package fr.delbrayelle.java10;

import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

public class DemoJava10 {

    private static final String FILE_TO_READ = "src/main/resources/myfile.txt";
    private static final String FILE_TO_WRITE = "src/main/resources/myfile2.txt";

    // var notValidHere = "abc";

    public static void main(String[] args) {

        // Local-variable type inference - JEP 286
        var validHere = "abc";

        final var canBeFinal = 1987;

        var strings = new ArrayList<>();
        strings.add("toto");
        strings.add(1d);

        for (var i = 0; i < 10; i++) {
            System.out.println(i);
        }

        // Collection Copy factory methods
        final List<Integer> mutableList = new ArrayList<>();
        mutableList.add(1);
        mutableList.add(2);
        mutableList.add(3);

        final List<Integer> copiedList = List.copyOf(mutableList);
        System.out.println(copiedList);
//        copiedList.add(4); // throws UnsupportedOperationException

        // Nouveautés diverses
        final List<Integer> unmodifiableList = mutableList.stream()
                .collect(Collectors.toUnmodifiableList());
        System.out.println(unmodifiableList);
//        unmodifiableList.add(7); // throws UnsupportedOperationException

        Optional<String> optionalString = Optional.of("toto");
        optionalString.orElseThrow(() -> new RuntimeException());
//        Optional.empty().orElseThrow(() -> new RuntimeException());

        try (var reader = new FileReader(FILE_TO_READ)) {
            Writer writer = new FileWriter("test.txt");
            System.out.println(reader.transferTo(writer) + " chars have been written");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    static List<String> method(/* var notValidHere */) {
        var results = new ArrayList<>();
        results.add("abc");
//        return results; // Found: ArrayList <java.lang.Object>

        return new ArrayList<>();
    }

}
