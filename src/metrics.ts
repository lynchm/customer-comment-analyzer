abstract class Metrics {
    public lessthanfifteencomments: number = 0;
    public shakercomments: number = 0;
    public movercomments: number = 0;
    public questionmarkcomments: number = 0;
    public spamcomments: number = 0;

    ReadThanLessThanFifteen(line: string): number{
        if(line.length < 15){
            return 1;
        }else{
            return 0;
        }
    }

    ReadShakerComments(line: string): number{
        var regExp = new RegExp(line.toUpperCase(), "SHAKER");
        return (line.match(regExp) || []).length;
    }

    ReadMoverComments(line: string): number{
        var regExp = new RegExp(line.toUpperCase(), "MOVER");
        return (line.match(regExp) || []).length;
    }

    ReadQuestionMarkComments(line: string): number{
        var regExp = new RegExp(line.toUpperCase(), "^\?+$");
        return (line.match(regExp) || []).length;
    }

    ReadQuestionSpamComments(line: string): number{
        var regExp = new RegExp(line.toUpperCase(), "^\?+$");
        return (line.match(regExp) || []).length;
    }

}