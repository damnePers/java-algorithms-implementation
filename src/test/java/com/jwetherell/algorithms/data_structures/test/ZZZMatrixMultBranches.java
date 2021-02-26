
package com.jwetherell.algorithms.data_structures.test;

import com.jwetherell.algorithms.data_structures.Matrix;
import org.junit.Test;

import java.util.Arrays;

public class ZZZMatrixMultBranches {

    @Test
    public void testNumBranches() {
        int numVisited = 0;
        for (boolean b : Matrix.visited) {
            if (b) numVisited++;
        }
        double percentage = (double) numVisited/Matrix.visited.length;
        System.out.println("Branch Coverage for Matrix - multiply");
        System.out.println("Visited: \t\t"+numVisited);
        System.out.println("Total: \t\t\t"+Matrix.visited.length);
        System.out.println("Percentage: \t"+percentage*100+"%");
      }

      @Test
      public void testNumBranchesSubtract() {
          int numVisited = 0;
          for (boolean b : Matrix.subtractBranchesVisited) {
              if (b) numVisited++;
          }
          double percentage = (double) numVisited/Matrix.subtractBranchesVisited.length;
          System.out.println("Branch Coverage for Matrix - subtract");
          System.out.println("Visited: \t\t"+numVisited);
          System.out.println("Total: \t\t\t"+Matrix.subtractBranchesVisited.length);
          System.out.println("Percentage: \t"+percentage*100+"%");
      }
}
