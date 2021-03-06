package com.jwetherell.algorithms.data_structures.test;

import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;
import static org.junit.Assert.assertArrayEquals;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThrows;
import org.junit.Test;
import org.junit.function.ThrowingRunnable;
import java.math.BigDecimal;
import java.math.BigInteger;

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
    Test cases for subtract task 2
    */
    @Test
    public void testMatrixDifferentDimensionsSubtract() {
        // Requirement: If the input matrix has a different dimensionality to "this" Matrix,
        // then return a matrix of null values, with the same dimensionality of "this" Matrix:
        int rows = 2;
        int cols = 2;
        int counter = 0;
        Matrix<Integer> matrix2by2 = new Matrix<Integer>(rows, cols);
        for (int r = 0; r < rows; r++)
        for (int c = 0; c < cols; c++)
        matrix2by2.set(r, c, counter++);

        Integer[][] arrayDifferentSize = new Integer[][]{{1},
        {1}};
        Matrix<Integer> matrixDifferentSize = new Matrix<Integer>(2,1,arrayDifferentSize);
        Matrix<Integer> matrixDifferentSizeSubtraction = matrixDifferentSize.subtract(matrix2by2);
        // Check the top-left element is null:
        assertTrue(matrixDifferentSizeSubtraction.get(0,0) == null);
        // Check the number of rows and columns is the same as "this" matrix:
        assertTrue(matrixDifferentSizeSubtraction.getRows() == matrixDifferentSize.getRows());
        assertTrue(matrixDifferentSizeSubtraction.getCols() == matrixDifferentSize.getCols());
    }

    @Test
    public void testMatrixDoubleSubtract() {
        // Requirement: If a 2x2 Matrix consisting of the values 1.2 is subtracted from a 2x2 Matrix
        // with the value 3.9, then, the result will be a 2x2 Matrix with the value 2.7:
        Double[][] array1point2 = new Double[][]{{1.2,1.2},
        {1.2,1.2}};
        Matrix<Double> matrix1point2 = new Matrix<Double>(2,2,array1point2);
        Double[][] array3point9 = new Double[][]{{3.9,3.9},
        {3.9,3.9}};
        Matrix<Double> matrix3point9 = new Matrix<Double>(2,2,array3point9);
        Double[][] array2point7 = new Double[][]{{2.7,2.7},
        {2.7,2.7}};
        Matrix<Double> matrix2point7 = new Matrix<Double>(2,2,array2point7);
        Matrix<Double> resultDoubleSubtraction = matrix3point9.subtract(matrix1point2);
        assertTrue(resultDoubleSubtraction.equals(matrix2point7));
    }

    @Test
    public void testMatrixFloatSubtract() {
        // Requirement: If a 2x2 Float Matrix consisting of the values 1.2 is subtracted from a 2x2 Matrix
        // with the value 3.9, then, the result will be a 2x2 Matrix with the value 2.7:
        Float[][] array1point2 = new Float[][]{{1.2f,1.2f},
        {1.2f,1.2f}};
        Matrix<Float> matrix1point2 = new Matrix<Float>(2,2,array1point2);
        Float[][] array3point9 = new Float[][]{{3.9f,3.9f},
        {3.9f,3.9f}};
        Matrix<Float> matrix3point9 = new Matrix<Float>(2,2,array3point9);
        Float[][] array2point7 = new Float[][]{{2.7f,2.7f},
        {2.7f,2.7f}};
        Matrix<Float> matrix2point7 = new Matrix<Float>(2,2,array2point7);
        Matrix<Float> resultDoubleSubtraction = matrix3point9.subtract(matrix1point2);
        assertTrue(resultDoubleSubtraction.equals(matrix2point7));
    }

    @Test
    public void testMatrixBigDecimalSubtract() {
        // Requirement: If a 2x2 Matrix of BigDecimals with the value 1 is subtracted from a 2x2 Matrix
        // with the value 3, then, the result will be a 2x2 Matrix with the value 2:
        Matrix<BigDecimal> matrix1 = new Matrix<BigDecimal>(2, 2);
        matrix1.set(0, 0, BigDecimal.valueOf(1));
        matrix1.set(0, 1, BigDecimal.valueOf(1));
        matrix1.set(1, 0, BigDecimal.valueOf(1));
        matrix1.set(1, 1, BigDecimal.valueOf(1));

        Matrix<BigDecimal> matrix2 = new Matrix<BigDecimal>(2, 2);
        matrix2.set(0, 0, BigDecimal.valueOf(2));
        matrix2.set(0, 1, BigDecimal.valueOf(2));
        matrix2.set(1, 0, BigDecimal.valueOf(2));
        matrix2.set(1, 1, BigDecimal.valueOf(2));

        Matrix<BigDecimal> matrix3 = new Matrix<BigDecimal>(2, 2);
        matrix3.set(0, 0, BigDecimal.valueOf(3));
        matrix3.set(0, 1, BigDecimal.valueOf(3));
        matrix3.set(1, 0, BigDecimal.valueOf(3));
        matrix3.set(1, 1, BigDecimal.valueOf(3));

        Matrix<BigDecimal> resultSubtraction = matrix3.subtract(matrix1);
        assertTrue(resultSubtraction.equals(matrix2));
    }

    @Test
    public void testMatrixBigIntegerSubtract() {
        // Requirement: If a 2x2 Matrix of BigIntegers with the value 1 is subtracted from a 2x2 Matrix
        // with the value 3, then, the result will be a 2x2 Matrix with the value 2:
        Matrix<BigInteger> matrix1 = new Matrix<BigInteger>(2, 2);
        matrix1.set(0, 0, BigInteger.valueOf(1));
        matrix1.set(0, 1, BigInteger.valueOf(1));
        matrix1.set(1, 0, BigInteger.valueOf(1));
        matrix1.set(1, 1, BigInteger.valueOf(1));

        Matrix<BigInteger> matrix2 = new Matrix<BigInteger>(2, 2);
        matrix2.set(0, 0, BigInteger.valueOf(2));
        matrix2.set(0, 1, BigInteger.valueOf(2));
        matrix2.set(1, 0, BigInteger.valueOf(2));
        matrix2.set(1, 1, BigInteger.valueOf(2));

        Matrix<BigInteger> matrix3 = new Matrix<BigInteger>(2, 2);
        matrix3.set(0, 0, BigInteger.valueOf(3));
        matrix3.set(0, 1, BigInteger.valueOf(3));
        matrix3.set(1, 0, BigInteger.valueOf(3));
        matrix3.set(1, 1, BigInteger.valueOf(3));

        Matrix<BigInteger> resultSubtraction = matrix3.subtract(matrix1);
        assertTrue(resultSubtraction.equals(matrix2));
    }


    @Test
    public void testMatrixLongSubtract() {
        // Requirement: If a 2x2 Matrix of Longs with the value 1 is subtracted from a 2x2 Matrix
        // with the value 3, then, the result will be a 2x2 Matrix with the value 2:
        Matrix<Long> matrix1 = new Matrix<Long>(2, 2);
        matrix1.set(0, 0, Long.valueOf(1));
        matrix1.set(0, 1, Long.valueOf(1));
        matrix1.set(1, 0, Long.valueOf(1));
        matrix1.set(1, 1, Long.valueOf(1));

        Matrix<Long> matrix2 = new Matrix<Long>(2, 2);
        matrix2.set(0, 0, Long.valueOf(2));
        matrix2.set(0, 1, Long.valueOf(2));
        matrix2.set(1, 0, Long.valueOf(2));
        matrix2.set(1, 1, Long.valueOf(2));

        Matrix<Long> matrix3 = new Matrix<Long>(2, 2);
        matrix3.set(0, 0, Long.valueOf(3));
        matrix3.set(0, 1, Long.valueOf(3));
        matrix3.set(1, 0, Long.valueOf(3));
        matrix3.set(1, 1, Long.valueOf(3));

        Matrix<Long> resultSubtraction = matrix3.subtract(matrix1);
        assertTrue(resultSubtraction.equals(matrix2));
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

    /*
      Added test cases for multiply task 2
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

    /*
    Test cases for add task 2
    */

    @Test
    public void notSameNumberOfRowsAndCols() {
        Matrix<Integer> matrix1 = new Matrix<Integer>(3, 2);
        matrix1.set(0, 0, 5);
        matrix1.set(0, 1, 5);
        matrix1.set(1, 0, 5);
        matrix1.set(1, 1, 5);
        matrix1.set(2, 0, 5);
        matrix1.set(2, 1, 5);

        Matrix<Integer> matrix2 = new Matrix<Integer>(2, 3);
        matrix2.set(0, 0, 4);
        matrix2.set(0, 1, 4);
        matrix2.set(0, 2, 4);
        matrix2.set(1, 0, 4);
        matrix2.set(1, 1, 4);
        matrix2.set(1, 2, 4);

        // Assert that the adding two matrices of different size results in an exception
        assertThrows(IllegalArgumentException.class, new ThrowingRunnable() {
            @Override
            public void run() throws Throwable {
                matrix1.add(matrix2);}
            });
    }

    @Test
    public void matricesOfBigInteger() {
        Matrix<BigInteger> matrix1 = new Matrix<BigInteger>(3, 2);
        matrix1.set(0, 0, BigInteger.valueOf(1));
        matrix1.set(0, 1, BigInteger.valueOf(1));
        matrix1.set(1, 0, BigInteger.valueOf(1));
        matrix1.set(1, 1, BigInteger.valueOf(1));
        matrix1.set(2, 0, BigInteger.valueOf(1));
        matrix1.set(2, 1, BigInteger.valueOf(1));

        Matrix<BigInteger> matrix2 = new Matrix<BigInteger>(3, 2);
        matrix2.set(0, 0, BigInteger.valueOf(2));
        matrix2.set(0, 1, BigInteger.valueOf(2));
        matrix2.set(1, 0, BigInteger.valueOf(2));
        matrix2.set(1, 1, BigInteger.valueOf(2));
        matrix2.set(2, 0, BigInteger.valueOf(2));
        matrix2.set(2, 1, BigInteger.valueOf(2));

        //Result
        BigInteger[][] rowsNcols = new BigInteger[][]{{BigInteger.valueOf(3),BigInteger.valueOf(3)},
        {BigInteger.valueOf(3),BigInteger.valueOf(3)},
        {BigInteger.valueOf(3),BigInteger.valueOf(3)}};
        Matrix<BigInteger> expected = new Matrix<BigInteger>(3, 2, rowsNcols);
        Matrix<BigInteger> actual = matrix1.add(matrix2);

        assertEquals(expected,actual);
    }

    @Test
    public void matricesOfBigDouble() {
        Matrix<BigDecimal> matrix1 = new Matrix<BigDecimal>(3, 2);
        matrix1.set(0, 0, BigDecimal.valueOf(1));
        matrix1.set(0, 1, BigDecimal.valueOf(1));
        matrix1.set(1, 0, BigDecimal.valueOf(1));
        matrix1.set(1, 1, BigDecimal.valueOf(1));
        matrix1.set(2, 0, BigDecimal.valueOf(1));
        matrix1.set(2, 1, BigDecimal.valueOf(1));

        Matrix<BigDecimal> matrix2 = new Matrix<BigDecimal>(3, 2);
        matrix2.set(0, 0, BigDecimal.valueOf(2));
        matrix2.set(0, 1, BigDecimal.valueOf(2));
        matrix2.set(1, 0, BigDecimal.valueOf(2));
        matrix2.set(1, 1, BigDecimal.valueOf(2));
        matrix2.set(2, 0, BigDecimal.valueOf(2));
        matrix2.set(2, 1, BigDecimal.valueOf(2));

        //Result
        BigDecimal[][] rowsNcols = new BigDecimal[][]{{BigDecimal.valueOf(3),BigDecimal.valueOf(3)},
        {BigDecimal.valueOf(3),BigDecimal.valueOf(3)},
        {BigDecimal.valueOf(3),BigDecimal.valueOf(3)}};
        Matrix<BigDecimal> expected = new Matrix<BigDecimal>(3, 2, rowsNcols);
        Matrix<BigDecimal> actual = matrix1.add(matrix2);

        assertEquals(expected,actual);
    }

    @Test
    public void matricesOfLong() {
        Matrix<Long> matrix1 = new Matrix<Long>(3, 2);
        matrix1.set(0, 0, Long.valueOf(1));
        matrix1.set(0, 1, Long.valueOf(1));
        matrix1.set(1, 0, Long.valueOf(1));
        matrix1.set(1, 1, Long.valueOf(1));
        matrix1.set(2, 0, Long.valueOf(1));
        matrix1.set(2, 1, Long.valueOf(1));

        Matrix<Long> matrix2 = new Matrix<Long>(3, 2);
        matrix2.set(0, 0, Long.valueOf(2));
        matrix2.set(0, 1, Long.valueOf(2));
        matrix2.set(1, 0, Long.valueOf(2));
        matrix2.set(1, 1, Long.valueOf(2));
        matrix2.set(2, 0, Long.valueOf(2));
        matrix2.set(2, 1, Long.valueOf(2));

        //Result
        Long i = Long.valueOf(3);
        Long[][] rowsNcols = new Long[][]{{i,i},{i,i},{i,i}};
        Matrix<Long> expected = new Matrix<Long>(3, 2, rowsNcols);
        Matrix<Long> actual = matrix1.add(matrix2);

        assertEquals(expected,actual);
    }

    @Test
    public void matricesOfDouble() {
        Matrix<Double> matrix1 = new Matrix<Double>(3, 2);
        matrix1.set(0, 0, Double.valueOf(1));
        matrix1.set(0, 1, Double.valueOf(1));
        matrix1.set(1, 0, Double.valueOf(1));
        matrix1.set(1, 1, Double.valueOf(1));
        matrix1.set(2, 0, Double.valueOf(1));
        matrix1.set(2, 1, Double.valueOf(1));

        Matrix<Double> matrix2 = new Matrix<Double>(3, 2);
        matrix2.set(0, 0, Double.valueOf(2));
        matrix2.set(0, 1, Double.valueOf(2));
        matrix2.set(1, 0, Double.valueOf(2));
        matrix2.set(1, 1, Double.valueOf(2));
        matrix2.set(2, 0, Double.valueOf(2));
        matrix2.set(2, 1, Double.valueOf(2));

        //Result
        Double i = Double.valueOf(3);
        Double[][] rowsNcols = new Double[][]{{i,i}, {i,i}, {i,i}};
        Matrix<Double> expected = new Matrix<Double>(3, 2, rowsNcols);
        Matrix<Double> actual = matrix1.add(matrix2);

        assertEquals(expected,actual);
    }

    @Test
    public void matricesOfFloat() {
        Matrix<Float> matrix1 = new Matrix<Float>(3, 2);
        matrix1.set(0, 0, 1F);
        matrix1.set(0, 1, 1F);
        matrix1.set(1, 0, 1F);
        matrix1.set(1, 1, 1F);
        matrix1.set(2, 0, 1F);
        matrix1.set(2, 1, 1F);

        Matrix<Float> matrix2 = new Matrix<Float>(3, 2);
        matrix2.set(0, 0, 2F);
        matrix2.set(0, 1, 2F);
        matrix2.set(1, 0, 2F);
        matrix2.set(1, 1, 2F);
        matrix2.set(2, 0, 2F);
        matrix2.set(2, 1, 2F);

        //Result
        Float[][] rowsNcols = new Float[][]{{3F,3F}, {3F,3F}, {3F,3F}};
        Matrix<Float> expected = new Matrix<Float>(3, 2, rowsNcols);
        Matrix<Float> actual = matrix1.add(matrix2);

        assertEquals(expected,actual);
    }

    @Test
    public void testCompareMethodBigDecimal() {
        Matrix<BigDecimal> m1 = new Matrix<BigDecimal>(2, 2);
        m1.set(0, 0, new BigDecimal(1));
        m1.set(0, 1, new BigDecimal(0));
        m1.set(1, 0, new BigDecimal(0));
        m1.set(1, 1, new BigDecimal(1));

        Matrix<Integer> m2 = new Matrix<Integer>(2, 2);
        m2.set(0, 0, 1);
        m2.set(0, 1, 0);
        m2.set(1, 0, 0);
        m2.set(1, 1, 1);

        assertTrue(m1.equals(m2));
        assertTrue(m2.equals(m1));
    }
    @Test
    public void testCompareMethodBigInteger() {
        Matrix<BigInteger> m1 = new Matrix<BigInteger>(2, 2);
        m1.set(0, 0, BigInteger.valueOf(1));
        m1.set(0, 1, BigInteger.valueOf(0));
        m1.set(1, 0, BigInteger.valueOf(0));
        m1.set(1, 1, BigInteger.valueOf(1));

        Matrix<Integer> m2 = new Matrix<Integer>(2, 2);
        m2.set(0, 0, 1);
        m2.set(0, 1, 0);
        m2.set(1, 0, 0);
        m2.set(1, 1, 1);

        assertTrue(m1.equals(m2));
        assertTrue(m2.equals(m1));
    }
    @Test
    public void testCompareMethodLong() {
        Matrix<Long> m1 = new Matrix<Long>(2, 2);
        m1.set(0, 0, 1L);
        m1.set(0, 1, 0L);
        m1.set(1, 0, 0L);
        m1.set(1, 1, 1L);

        Matrix<Integer> m2 = new Matrix<Integer>(2, 2);
        m2.set(0, 0, 1);
        m2.set(0, 1, 0);
        m2.set(1, 0, 0);
        m2.set(1, 1, 1);

        assertTrue(m1.equals(m2));
        assertTrue(m2.equals(m1));
    }
    @Test
    public void testCompareMethodDouble() {
        Matrix<Double> m1 = new Matrix<Double>(2, 2);
        m1.set(0, 0, 1.0);
        m1.set(0, 1, 0.0);
        m1.set(1, 0, 0.0);
        m1.set(1, 1, 1.0);

        Matrix<Integer> m2 = new Matrix<Integer>(2, 2);
        m2.set(0, 0, 1);
        m2.set(0, 1, 0);
        m2.set(1, 0, 0);
        m2.set(1, 1, 1);

        assertTrue(m1.equals(m2));
        assertTrue(m2.equals(m1));
    }
    @Test
    public void testCompareMethodFloat() {
        Matrix<Float> m1 = new Matrix<Float>(2, 2);
        m1.set(0, 0, 1f);
        m1.set(0, 1, 0f);
        m1.set(1, 0, 0f);
        m1.set(1, 1, 1f);

        Matrix<Integer> m2 = new Matrix<Integer>(2, 2);
        m2.set(0, 0, 1);
        m2.set(0, 1, 0);
        m2.set(1, 0, 0);
        m2.set(1, 1, 1);

        assertTrue(m1.equals(m2));
        assertTrue(m2.equals(m1));
    }
}
