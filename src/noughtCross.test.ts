import { findWinner } from './noughtCross';
import { IBoard } from './board';

describe("findWinner", () => {

    let board_downwardX = {places : [
            ["X", "0", null],
            ["X", null, "0"],
            ["X", null, "0"]
            ]};

    let board_downward0 = {places : [
            ["X", "0", "0"],
            ["X", null, "0"],
            [null, "X", "0"]
            ]};

    let board_across0 = {places : [
            ["X", null, "X"],
            ["0", null, "X"],
            ["0", "0", "0"]
            ]}

    let board_acrossX_LC = {places : [
        ["x", "x", "x"],
        ["0", null, "0"],
        ["x", null, "0"]
        ]};

    let board_diagnolX_LC = {places : [
        ["X", null, "X"],
        ["0", "x", "0"],
        ["0", null, "X"]
        ]};

    let board_diagnol0 = {places : [
            ["0", null, "0"],
            ["X", "0", "X"],
            ["0", null, "X"]
            ]};

    let board_none = {places : [
        ["0", "X", "0"],
        ["X", "0", "0"],
        ["X", "0", "X"]
        ]};

    let board_empty = {places : [
            [null, null, null],
            [null, null, null],
            [null, null, null]
            ]};

    test("Find (lowercase) winner, horizontal 3xX", () => {         
        expect(findWinner(board_acrossX_LC)).toEqual("X"); 
    });
    test("Find winner, horizontal 3x0", () => {         
        expect(findWinner(board_across0)).toEqual("0"); 
    });
    test("Find winner, vertical 3xX", () => {         
        expect(findWinner(board_downwardX)).toEqual("X"); 
        });
    test("Find winner, vertical 3x0", () => {         
        expect(findWinner(board_downward0)).toEqual("0"); 
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
