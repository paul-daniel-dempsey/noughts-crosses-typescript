const {findWinner}= require("../challenges/exercise007");

describe("findWinner", () => {

    let board_downwardX =  [
            ["X", "0", null],
            ["X", null, "0"],
            ["X", null, "0"]
            ];

    let board_downward0 =  [
            ["X", "0", "0"],
            ["X", null, "0"],
            [null, "X", "0"]
            ];
    
    let board_across0 =  [
            ["X", null, "X"],
            ["0", null, "X"],
            ["0", "0", "0"]
            ];

    let board_acrossX_LC =  [
            ["x", "x", "x"],
            ["0", null, "0"],
            ["x", null, "0"]
            ];

    let board_diagnolX_LC =  [
            ["X", null, "X"],
            ["0", "x", "0"],
            ["0", null, "X"]
            ];

    let board_diagnol0 =  [
                ["0", null, "0"],
                ["X", "0", "X"],
                ["0", null, "X"]
                ];

    let board_none =  [
            ["0", "X", "0"],
            ["X", "0", "0"],
            ["X", "0", "X"]
            ];

    let board_empty =  [
            [null, null, null],
            [null, null, null],
            [null, null, null]
            ];

    test("Find winner, vertical 3xX or 3x0", () => {         
        expect(findWinner(board_downwardX)).toEqual("X"); 
        });
    test("Find winner, vertical 3xX or 3x0", () => {         
        expect(findWinner(board_downward0)).toEqual("0"); 
        });
    test("Find (lowercase) winner, horizontal 3xX or 3x0", () => {         
        expect(findWinner(board_acrossX_LC)).toEqual("X"); 
    });
    test("Find winner, horizontal 3xX or 3x0", () => {         
        expect(findWinner(board_across0)).toEqual("0"); 
    });
    test("Find (lowercase) winner, diagonal 3xX or 3x0", () => {         
        expect(findWinner(board_diagnolX_LC)).toEqual("X"); 
    });
    test("Find winner, diagonal 3xX or 3x0", () => {         
        expect(findWinner(board_diagnol0)).toEqual("0"); 
    });
    test("No winner, vertical/horizontal/diagonal 3xX or 3x0", () => {         
        expect(findWinner(board_none)).toEqual(null); 
    });
    test("Empty board", () => {         
        expect(findWinner(board_empty)).toEqual(null); 
    });            
});