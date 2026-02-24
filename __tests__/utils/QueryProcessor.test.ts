import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "yaritzag"
          ));
    });

    test('should return andrew id', () => {
        const query = "What is your Andrew ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "yaritzag"
        ));
    });

    test('should solve addition with plus-delimited URL query', () => {
        const query = "What+is+48+plus+67%3F";
        const response: string = QueryProcessor(query);
        expect(response).toBe("115");
    });

    test('should solve largest with plus-delimited URL query', () => {
        const query = "Which+of+the+following+numbers+is+the+largest%3A+74%2C+33%2C+88%3F";
        const response: string = QueryProcessor(query);
        expect(response).toBe("88");
    });
});