(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1339:function(n,e,t){"use strict";t.r(e),e.default="---\nheader: Linear Algebra\ndescription: The study of linear equations.\n---\n\n## Linear Equations\n\nA linear equation can be expressed as\n\n$$y=a_1x_1 + a_2x_2 + a_3x_3 + ... + a_nx_n = b$$\n\nwhere $a_1, a_2, a_3, ... , a_n, b$ are scalar coefficients and $x_1, x_2, x_3, ..., x_n$ are variables.\n\n### Homogenous System of Linear Equations\n\nA homogenous system of linear equations takes the form\n\n$$a_{11}x_1+a_{12}x_2+...+a_{1n}x_n=0\n\\newline\n\\newline \\vdots\n\\newline\na_{m1}x_1+a_{m2}x_2+...+a_{mn}x_n=0$$\n\nThis is system of linear equations is homogenous because the solution to the system has at least one trivial solution, $x_1=x_2= ... =x_n=0$.\n\n#### Theorem of Homogenous Systems\n\nA homogenous system with $n$ variables and $m$ equations has $\\infty$ solutions if $n>m$.\n\n## Augmented Matrix\n\nGiven a system of linear equations\n\n$$a_{11}x_1+a_{12}x_2+...+a_{1n}x_n=b_1\n\\newline\n\\newline \\vdots\n\\newline\na_{m1}x_1+a_{m2}x_2+...+a_{mn}x_n=b_n$$\n\nWe can extract the coefficients transform the system into an augmented matrix:\n\n$$\\left[\n\\begin{array}{cccc:c}\na_{11} & a_{12} & \\dots & a_{1n} & b_1 \\\\ \n\\vdots & \\vdots & \\ddots & \\vdots & \\vdots \\\\ \na_{m1} & a_{m2} & \\dots & a_{mn} & b_n \\\\\n\\end{array}\n\\right]$$\n\n## Reduced Row Echelon Form\n\n1. Any rows of zeroes are at the bottom.\n2. The first non-zero entry of a non-zero row is one (1).\n3. Starting from the top left, the leading one (1) appears to the right of the leading one (1) of the preceding row.\n4. All other entries of a column containing a leading one (1) is zero (0).\n\n## Scalars\n\nA scalar is a single number.\n\n## Vectors\n\nA vector is column of an array numbers.\n\n### Notation\n\n$$ \\bold{A} =\n\\left[\n\\begin{array}{c}\nx_1 \\\\\nx_2 \\\\\n\\vdots \\\\\nx_n\n\\end{array}\n\\right]$$\n\nwhere $n$ is the number of rows in the vector.\n\n## Matrices\n\nA matrix is a two dimensional collection of numbers with a fixed number of rows and columns, of the form:\n\n### Notation\n\n$$ \\bold{A}_{mn} =\n\\left[\n\\begin{array}{ccccc}\na_{11} & a_{12} & \\dots & a_{1n} \\\\\na_{21} & a_{22} & \\dots & a_{2n} \\\\\n\\vdots & \\vdots & \\ddots & \\vdots \\\\ \na_{m1} & a_{m2} & \\dots & a_{mn} \\\\\n\\end{array}\n\\right]$$\n\nwhere $A$ is an $m \\times n$ matrix and $m$ are the rows and $n$ are the columns.\n\nMore generally,\n\n$$\\bold{A} =\n\\left[\n\\begin{array}{c}\na_{ij} \n\\end{array}\n\\right]$$\n\n$A$ is an $i \\times j$ matrix where $i$ is the number of rows and $j$ is the number of columns.\n\n### Rows\n\n$\\bold{A}_{i,:}$ denotes the $i$-th row of matrix $A$.\n\n### Columns\n\n$\\bold{A}_{:,j}$ denotes the $j$-th column of matrix $A$.\n\n### Entries\n\n$\\bold{A}_{i,j}$ denotes the $(i,j)$-th element of matrix $A$.\n\n### Properties\n\nLet\n\n$$A =\n\\left[\n\\begin{array}{c}\na_{ij} \n\\end{array}\n\\right]$$\n\n$$B =\n\\left[\n\\begin{array}{c}\nb_{ij} \n\\end{array}\n\\right]$$\n\n$$C =\n\\left[\n\\begin{array}{c}\nc_{ij} \n\\end{array}\n\\right]$$\n\nand $c,d$ be scalars.\n\n#### Addition\n\n$$A + B =\n\\left[\n\\begin{array}{c}\na_{ij} + b_{ij}\n\\end{array}\n\\right]$$\n\n#### Scalar Product\n\n$$\nc\\bold{A} =\nc \\left[\n\\begin{array}{c}\na_{ij}\n\\end{array}\n\\right]\n=\n\\left[\n\\begin{array}{c}\nc a_{ij}\n\\end{array}\n\\right]\n$$\n\n#### Commutativity\n\n$$\\bold{A} + \\bold{B} = \\bold{B} + \\bold{A} \\text{}$$\n\n#### Associativity\n\n$$\\bold{A} + (\\bold{B} + \\bold{C}) = (\\bold{A} + \\bold{B}) + \\bold{C} \\text{}$$\n\n#### Scalar Distributivity\n\n$$c(d\\bold{A}) = (cd)\\bold{A}$$\n\n$$c(\\bold{A} + \\bold{B}) = c\\bold{A} + d \\bold{B}$$\n\n$$(c + d) \\bold{A} = c \\bold{A} + d \\bold{A}$$\n\n#### Negativity\n\n$$-\\bold{A} =\n\\left[\n\\begin{array}{c}\n- a_{ij}\n\\end{array}\n\\right]\n$$\n\n## Tensors\n\nA tensor is a generalized form of vectors and scalars.\n\n## Linear Combinations\n\nA linear combination is the sum of scalar multiples of vectors. Let $\\bold{v}_1 \\dots \\bold{v}_n$ be vectors and $a_1 \\dots a_n$ be scalars:\n\n$$a_1 \\bold{v}_1 + a_2 \\bold{v}_2 + \\dots + a_n \\bold{v}_n$$\n\nA reason why it is called a linear combination is because if you fix one vector and vary another by a scalar, the resulting vector draws out a straight line.\n\n### Basis\n\nThe basis of a vector space is a set of linearly independent vectors that span the full space.\n\n### Span\n\nThe set of all possible vectors you an reach with a linear combination of a given pair of vectors is the **span** of those two vectors.\n\nIn other words, it is the set of all possible vectors you get by scaling each vector in some way and summing them.\n\n### Linearly Dependent\n\nA **linearly dependent** pair of vectors means that a vector does not contribute another dimension to the span. For example, if two vectors are added together and they both have the same span, they are linearly dependent; one vector can be expressed as a linear combination of the others.\n\n### Linearly Independent\n\nA **linearly independent** pair of vectors means that it contributes to the dimension of the span.\n\n## Linear Transformation\n\nA **linear transformation** is the act of inputting one vector and manipulating it such that you output a new vector.\n\nFor instance if you rotate a vector a certain number of degrees.\n"}}]);