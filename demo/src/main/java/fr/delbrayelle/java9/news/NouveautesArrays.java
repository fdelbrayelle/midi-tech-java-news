package fr.delbrayelle.java9.news;

import java.util.Arrays;

public class NouveautesArrays {

    public static void main(String[] args) {

        int[] firstIntArray = { 1, 2, 3 };
        int[] secondIntArray = { 4, 5, 6 };
        int[] thirdIntArray = { 1, 2, 3 };
        int[] fourthIntArray = { 1, 666, 3 };

        // Arrays::equals
        System.out.println(Arrays.equals(firstIntArray, secondIntArray));
        System.out.println(Arrays.equals(firstIntArray, thirdIntArray));

        // Arrays::compare
        System.out.println(Arrays.compare(firstIntArray, secondIntArray));
        System.out.println(Arrays.compare(firstIntArray, thirdIntArray));

        // Arrays::mismatch
        System.out.println(Arrays.mismatch(firstIntArray, secondIntArray));
        System.out.println(Arrays.mismatch(firstIntArray, fourthIntArray));
    }
}
