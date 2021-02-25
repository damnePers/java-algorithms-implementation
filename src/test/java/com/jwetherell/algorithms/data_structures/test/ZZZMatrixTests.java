
package com.jwetherell.algorithms.data_structures.test;

import com.jwetherell.algorithms.data_structures.Matrix;
import org.junit.Test;

import java.util.Arrays;

public class ZZZMatrixTests {

    @Test
    public void testNumBranches() {
        int numVisited = 0;
        for (boolean b : Matrix.visiteded) {
            if (b) numVisited++;
        }
        double percentage = (double) numVisited/Matrix.visiteded.length;
        System.out.println("Branch Coverage for Matrix - compare");
        System.out.println("Visited: \t\t"+numVisited);
        System.out.println("Total: \t\t\t"+Matrix.visiteded.length);
        System.out.println("Percentage: \t"+percentage*100+"%");

        System.out.println(Arrays.toString(Matrix.visiteded));

      }
}