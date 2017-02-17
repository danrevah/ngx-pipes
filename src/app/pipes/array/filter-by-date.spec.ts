import { FilterByDatePipe } from './filter-by-date';


describe('FilterByDate', () => {
    let pipe: FilterByDatePipe;

    const dates = [
        { date: '2016-11-23' },
        { date: '2016-10-20' },
        { date: '2015-12-20' },
        { date: '2015-02-15' },
        { date: '2015-01-10' },
    ];

    const datesBadFormat = [{ date: '' }, { date: 'asdasdas' }]

    beforeEach(() => {
        pipe = new FilterByDatePipe();
    });

    it('should not do anything in-case of not an array', () => {
        expect(pipe.transform('foo', '', '')).toEqual('foo');
        expect(pipe.transform(null, '', '')).toEqual(null);
        expect(pipe.transform(undefined, '', '')).toEqual(undefined);
        expect(pipe.transform(42, '', '')).toEqual(42);
        expect(pipe.transform({ foo: 1, bar: 2 }, '', '')).toEqual({ foo: 1, bar: 2 });
    });

    it('should not do anything in-case of bad dates inputs', () => {
        expect(pipe.transform(dates, 'date', '', '')).toEqual(dates);
    });


    it('should not do include in-case of bad dates array', () => {
        const filtered = pipe.transform(datesBadFormat, 'date', '2016-01-01', '');
        expect(filtered.length).toEqual(0);
    });


    it('should filter between dates', () => {
        const filtered = pipe.transform(dates, 'date', '2016-01-01', '2017-01-01');

        expect(filtered.length).toEqual(2);
        expect(filtered[0]).toEqual(dates[0]);
        expect(filtered[1]).toEqual(dates[1]);
    });

    it('should filter by after date', () => {
        const filtered = pipe.transform(dates, 'date', '2016-01-01', '');

        expect(filtered.length).toEqual(2);
        expect(filtered[0]).toEqual(dates[0]);
        expect(filtered[1]).toEqual(dates[1]);
    });


    it('should filter by before date', () => {
        const filtered = pipe.transform(dates, 'date', '', '2016-01-01');

        expect(filtered.length).toEqual(3);
        expect(filtered[0]).toEqual(dates[2]);
        expect(filtered[1]).toEqual(dates[3]);
        expect(filtered[2]).toEqual(dates[4]);

    });
});
