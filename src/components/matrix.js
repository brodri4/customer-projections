function Matrix(){
    
    function matrixDot (A, B) {
        var result = new Array(A.length).fill(0).map(row => new Array(B[0].length).fill(0));
    
        return result.map((row, i) => {
            return row.map((val, j) => {
                return A[i].reduce((sum, elm, k) => sum + (elm*B[k][j]) ,0)
            })
        })
    }

    function stable(m){
        let a1 = m[0][0]
        let a2 = m[1][0]
        let b1 = m[0][1]
        let b2 = m[1][1]
        let c1 = m[0][2]
        let c2 = m[1][2]
        
        let x = (1-a1-b2+(a1*b2) -(b1*a2))/((c1*a2)+c2-(c2*a1))
        let B = (1-a1)/(1+b1+x-a1-(x*a1)+(x*c1))
        let C = x*B
        let A = 1-B-C
        
        let stableM = [[A], [B], [C]]
        return stableM
    }



    let i
    let m1 = [[.8,.2,.3],[.1,.7,.1], [.1,.1,.6]]
    let mp = m1
    let m2 = [[.4],[.24],[.36]]
    let tnum = 2

    for (i=0; i < tnum; i++){
        mp = matrixDot(mp,m1)
    }
    
    let final = matrixDot(mp,m2)
    let stablematrix = stable(m1)
    console.log(stablematrix)
    return stablematrix
}

export default Matrix

