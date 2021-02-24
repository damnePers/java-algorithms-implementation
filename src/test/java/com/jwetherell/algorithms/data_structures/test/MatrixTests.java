package com.jwetherell.algorithms.data_structures.test;

import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;
import static org.junit.Assert.assertArrayEquals;
import org.junit.Test;
import java.math.BigDecimal;

import com.jwetherell.algorithms.data_structures.Matrix;

public class MatrixTests {

    @Test
    public void testMatrix() {
        Matrix<Integer> matrix1 = new Matrix<Integer>(4, 3);
        matrix1.set(0, 0, 14);
        matrix1.set(0, 1, 9);
        matrix1.set(0, 2, 3);
        matrix1.set(1, 0, 2);
        matrix1.set(1, 1, 11);
        matrix1.set(1, 2, 15);
        matrix1.set(2, 0, 0);
        matrix1.set(2, 1, 12);
        matrix1.set(2, 2, 17);
        matrix1.set(3, 0, 5);
        matrix1.set(3, 1, 2);
        matrix1.set(3, 2, 3);

        Matrix<Integer> matrix2 = new Matrix<Integer>(3, 2);
        matrix2.set(0, 0, 12);
        matrix2.set(0, 1, 25);
        matrix2.set(1, 0, 9);
        matrix2.set(1, 1, 10);
        matrix2.set(2, 0, 8);
        matrix2.set(2, 1, 5);

        // Result of multiplication
        Integer[][] array1 = new Integer[][]{{273,455},
                                             {243,235},
                                             {244,205},
                                             {102,160}};
        Matrix<Integer> result1 = new Matrix<Integer>(4,2,array1);

        Matrix<Integer> matrix3 = matrix1.multiply(matrix2);
        assertTrue("Matrix multiplication error. matrix3="+matrix3+" result1"+result1, matrix3.equals(result1));

        int rows = 2;
        int cols = 2;
        int counter = 0;
        Matrix<Integer> matrix4 = new Matrix<Integer>(rows, cols);
        for (int r = 0; r < rows; r++)
            for (int c = 0; c < cols; c++)
                matrix4.set(r, c, counter++);

        // Result of subtraction
        Integer[][] array2 = new Integer[][]{{0,0},
                                             {0,0}};
        Matrix<Integer> result2 = new Matrix<Integer>(2,2,array2);

        Matrix<Integer> matrix5 = matrix4.subtract(matrix4);
        assertTrue("Matrix subtraction error. matrix5="+matrix5+" result2"+result2, matrix5.equals(result2));

        // Result of addition
        Integer[][] array3 = new Integer[][]{{0,2},
                                             {4,6}};
        Matrix<Integer> result3 = new Matrix<Integer>(2,2,array3);

        Matrix<Integer> matrix6 = matrix4.add(matrix4);
        assertTrue("Matrix addition error. matrix6="+matrix6+" result3"+result3, matrix6.equals(result3));

        Matrix<Integer> matrix7 = new Matrix<Integer>(2, 2);
        matrix7.set(0, 0, 1);
        matrix7.set(0, 1, 2);
        matrix7.set(1, 0, 3);
        matrix7.set(1, 1, 4);

        Matrix<Integer> matrix8 = new Matrix<Integer>(2, 2);
        matrix8.set(0, 0, 1);
        matrix8.set(0, 1, 2);
        matrix8.set(1, 0, 3);
        matrix8.set(1, 1, 4);

        // Result of multiplication
        Integer[][] array4 = new Integer[][]{{7,10},
                                             {15,22}};
        Matrix<Integer> result4 = new Matrix<Integer>(2,2,array4);

        Matrix<Integer> matrix9 = matrix7.multiply(matrix8);
        assertTrue("Matrix multiplication error. matrix9="+matrix9+" result4"+result4, matrix9.equals(result4));
    }
    /*
      Added test cases for task 2
     */
       @Test
       public void testMatrixBigDecimal() {
         BigDecimal bd1, bd2, bd3, bd4;
          bd1 = new BigDecimal(1);
          bd2 = new BigDecimal(2);
          bd3 = new BigDecimal(3);
          bd4 = new BigDecimal(4);
         Matrix<BigDecimal> matrix7 = new Matrix<BigDecimal>(2, 2);
         matrix7.set(0, 0, bd1);
         matrix7.set(0, 1, bd2);
         matrix7.set(1, 0, bd3);
         matrix7.set(1, 1, bd4);

          bd1 = new BigDecimal(7);
          bd2 = new BigDecimal(10);
          bd3 = new BigDecimal(15);
          bd4 = new BigDecimal(22);
         BigDecimal[][] array4 = new BigDecimal[][]{{bd1,bd2},
                                              {bd3,bd4}};
         Matrix<BigDecimal> result4 = new Matrix<BigDecimal>(2,2,array4);
          Matrix<BigDecimal> matrix8 = matrix7.multiply(matrix7);
          assertTrue("Matrix multiplication error. matrix8="+matrix8+" result4"+result4, matrix8.equals(result4));
      }
      @Test
      public void testMatrixDouble() {
              //Test Matrix<double>
              Matrix<Double> matrix13 = new Matrix<Double>(2, 2);
              matrix13.set(0, 0, 1d);
              matrix13.set(0, 1, 2d);
              matrix13.set(1, 0, 3d);
              matrix13.set(1, 1, 4d);
              // Result of multiplication
              Double[][] array6 = new Double[][]{{7.0,10.0},
                                                 {15.0,22.0}};
              Matrix<Double> result6 = new Matrix<Double>(2,2,array6);
              Matrix<Double> matrix14 = matrix13.multiply(matrix13);
              assertTrue("Matrix multiplication error. matrix14="+matrix14+" result6"+result6, matrix14.equals(result6));
      }
      @Test
      public void testMatrixLong() {
              //Test Matrix<Long>
              Matrix<Long> matrix15 = new Matrix<Long>(2, 2);
              matrix15.set(0, 0, 1l);
              matrix15.set(0, 1, 2l);
              matrix15.set(1, 0, 3l);
              matrix15.set(1, 1, 4l);
              // Result of multiplication
              Long[][] array7 = new Long[][]{{7l,10l},
                                             {15l,22l}};
              Matrix<Long> result7 = new Matrix<Long>(2,2,array7);
              Matrix<Long> matrix16 = matrix15.multiply(matrix15);
              assertTrue("Matrix multiplication error. matrix16="+matrix16+" result7"+result7, matrix16.equals(result7));
      }
      @Test
      public void testMatrixFloat() {
              //Test Matrix<Float>
              Matrix<Float> matrix17 = new Matrix<Float>(2, 2);
              matrix17.set(0, 0, 1f);
              matrix17.set(0, 1, 2f);
              matrix17.set(1, 0, 3f);
              matrix17.set(1, 1, 4f);
              // Result of multiplication
              Float[][] array8 = new Float[][]{{7f,10f},
                                             {15f,22f}};
              Matrix<Float> result8 = new Matrix<Float>(2,2,array8);
              Matrix<Float> matrix18 = matrix17.multiply(matrix17);
              assertTrue("Matrix multiplication error. matrix18="+matrix18+" result8"+result8, matrix18.equals(result8));
      }

    @Test
    public void testIdentityMethod1() {
        Matrix<Integer> matrix = new Matrix<Integer>(2, 2);
        matrix.set(0, 0, 0);
        matrix.set(0, 1, 0);
        matrix.set(1, 0, 0);
        matrix.set(1, 1, 0);

        Matrix<Integer> expectedResult = new Matrix<Integer>(2, 2);
        expectedResult.set(0, 0, 1);
        expectedResult.set(0, 1, 0);
        expectedResult.set(1, 0, 0);
        expectedResult.set(1, 1, 1);

        try{
        	matrix = matrix.identity();
        } catch(Exception ex){
        	fail();
        }

        assertArrayEquals(expectedResult.getRow(0), matrix.getRow(0));
        assertArrayEquals(expectedResult.getRow(1), matrix.getRow(1));
    }
}
