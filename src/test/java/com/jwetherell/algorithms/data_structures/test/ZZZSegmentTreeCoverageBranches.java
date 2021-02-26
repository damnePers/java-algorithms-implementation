
package com.jwetherell.algorithms.data_structures.test;

import com.jwetherell.algorithms.data_structures.SegmentTree;
import org.junit.Test;

public class ZZZSegmentTreeCoverageBranches {

    @Test
    public void testCoverage() {
        int numVisited = 0;
        for (boolean b : SegmentTree.branchesVisited) {
            if (b) numVisited++;
        }
        double percentage = (double) numVisited/SegmentTree.branchesVisited.length;
        System.out.println("Branch Coverage for SegmentTree - combined");
        System.out.println("Visited: \t\t"+numVisited);
        System.out.println("Total: \t\t\t"+SegmentTree.branchesVisited.length);
        System.out.println("Percentage: \t"+percentage*100+"%");
      }
}
