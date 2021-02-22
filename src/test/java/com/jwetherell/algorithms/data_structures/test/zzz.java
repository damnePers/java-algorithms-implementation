package com.jwetherell.algorithms.data_structures.test;

import com.jwetherell.algorithms.data_structures.Matrix;
import org.junit.Test;

import java.util.Arrays;

public class zzz {

    @Test
    public void testNumBranches() {
        // Start Measuring branch coverage
        int numBranches = 0;
        for (boolean branch : Matrix.branchesVisited) {
            if (branch) numBranches++;
        }
        double percentage = (double) numBranches/Matrix.branchesVisited.length;
        System.out.println("Visited: \t\t"+numBranches);
        System.out.println("Total: \t\t\t"+Matrix.branchesVisited.length);
        System.out.println("Percentage: \t"+percentage);
        System.out.println(Arrays.toString(Matrix.branchesVisited));
        // End measuring branch coverage
    }

}
