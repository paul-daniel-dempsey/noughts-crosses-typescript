const {findWinner}= require("../challenges/exercise007");


    describe("sumDigits", () => {
        test("sum all digits upto and including value", () => {         
            expect(sumDigits(3)).toEqual(6);
        });
        test("sum all digits upto and including value", () => {         
            expect(sumDigits(4)).toEqual(10);
        });
        test("sum all digits upto and including value", () => {         
            expect(sumDigits(5)).toEqual(15);
        });
        test("sum zero to zero", () => {         
            expect(sumDigits(0)).toEqual(0);
        });
        test("sum negative downto and including value", () => {         
            expect(sumDigits(-3)).toEqual(-6);
        });                 
    });

    describe("createRange", () => {
        test("creates a start/end range of numbers in step", () => {         
            expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
        });
        test("creates a start/end range  (step bigger than range) ", () => {         
            expect(createRange(2, 4, 3)).toEqual([2]);
        });
        test("creates a start/end range same (bigger than range)", () => {         
            expect(createRange(3, 3, 2)).toEqual([3]);
        }); 
        test("creates a start/end range of numbers (step default=1)", () => {         
            expect(createRange(3, 7, 1)).toEqual([3, 4, 5, 6, 7]);
        });
        test("creates a start/end range of numbers (step default=1)", () => {         
            expect(createRange(3, 7)).toEqual([3, 4, 5, 6, 7]);
        });
        test("creates a start/end range same (step default=1)", () => {         
            expect(createRange(3, 3)).toEqual([3]);
        });        
    });

    describe("hexToRGB", () => {
        test("create RGB array from hex string", () => {         
            expect(hexToRGB("#FF0011")).toEqual([255,0,17]);
        });
        test("create RGB array from hex string", () => {         
            expect(hexToRGB("#FFFFFF")).toEqual([255,255,255]);
        });
        test("create RGB array from hex string", () => {         
            expect(hexToRGB("#000000")).toEqual([0,0,0]);
        });
        test("create empty RGB array", () => {         
            expect(hexToRGB("")).toEqual([]);
        });      
    });

    describe("getScreentimeAlertList", () => {

        let users =  [
            {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
                         { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                         { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                         { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                         { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                        ]
           },
           {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
                         { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                         { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                         { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                         { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                        ]
           },
           {
            username: "pauld_1971",
            name: "Paul Dempsey",
            screenTime: [
                         { date: "2019-05-02", usage: { strava: 20, komoot: 80, RideBygps: 1} },
                         { date: "2019-05-04", usage: { strava: 20, komoot: 80, RideBygps: 0} },
                        ]
           }
        ];

        test("retreive for given date 1 username >100mins (NOT =100mins, Any Apps) from array of user objects and their usage in minutes", () => {         
            expect(getScreentimeAlertList(users,"2019-05-04")).toEqual(["beth_1234"]); 
        });
        test("retreive for given date N usernames >100mins (Any Apps) from array of user objects and their usage in minutes", () => {         
            expect(getScreentimeAlertList(users,"2019-05-02")).toEqual(["beth_1234","sam_j_1989","pauld_1971"]); 
        });
        test("retreive for given date 0 usernames >100mins (Any Apps) from array of user objects and their usage in minutes", () => {         
            expect(getScreentimeAlertList(users,"2019-06-11")).toEqual([]); 
        });
    });

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