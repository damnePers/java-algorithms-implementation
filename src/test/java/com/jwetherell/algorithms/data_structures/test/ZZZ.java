
package com.jwetherell.algorithms.data_structures.test;

import com.jwetherell.algorithms.data_structures.BTree;
import org.junit.Test;

import java.util.Arrays;

public class ZZZ {

    @Test
    public void testNumBranches() {
        int numVisited = 0;
        for (boolean b : BTree.visited) {
            if (b) numVisited++;
        }
        double percentage = (double) numVisited/BTree.visited.length;
        System.out.println("Branch Coverage for BTree - validateNode");
        System.out.println("Visited: \t\t"+numVisited);
        System.out.println("Total: \t\t\t"+BTree.visited.length);
        System.out.println("Percentage: \t"+percentage*100+"%");
      }
}