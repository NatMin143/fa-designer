import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Model = () => {
  const tableBody = [
    { states: "S0", ifDigitInput: "S1", ifAlphabets: "DEAD STATE", ifDot: "DEAD STATE" },
    { states: "S1", ifDigitInput: "S2", ifAlphabets: "DEAD STATE", ifDot: "DEAD STATE" },
    { states: "S2", ifDigitInput: "S3", ifAlphabets: "DEAD STATE", ifDot: "DEAD STATE" },
    { states: "S3", ifDigitInput: "DEAD STATE", ifAlphabets: "DEAD STATE", ifDot: "S4" },
    { states: "S4", ifDigitInput: "S5", ifAlphabets: "DEAD STATE", ifDot: "DEAD STATE" },
    { states: "S5", ifDigitInput: "S6", ifAlphabets: "DEAD STATE", ifDot: "DEAD STATE" },
    { states: "S6", ifDigitInput: "S7", ifAlphabets: "DEAD STATE", ifDot: "DEAD STATE" },
    { states: "S7", ifDigitInput: "DEAD STATE", ifAlphabets: "DEAD STATE", ifDot: "S8" },
    { states: "S8", ifDigitInput: "S9", ifAlphabets: "DEAD STATE", ifDot: "DEAD STATE" },
    { states: "S9", ifDigitInput: "S10", ifAlphabets: "DEAD STATE", ifDot: "DEAD STATE" },
    { states: "S10", ifDigitInput: "S11", ifAlphabets: "DEAD STATE", ifDot: "DEAD STATE" }, 
    { states: "S11", ifDigitInput: "DEAD STATE", ifAlphabets: "DEAD STATE", ifDot: "S12" },
    { states: "S12", ifDigitInput: "S13", ifAlphabets: "DEAD STATE", ifDot: "DEAD STATE" },
    { states: "S13", ifDigitInput: "S14", ifAlphabets: "DEAD STATE", ifDot: "DEAD STATE" },
    { states: "S14", ifDigitInput: "S15", ifAlphabets: "DEAD STATE", ifDot: "DEAD STATE" },
    { states: "S15", ifDigitInput: "DEAD STATE", ifAlphabets: "DEAD STATE", ifDot: "DEAD STATE" },


  ];
  
  const tableBodyEl = tableBody.map((data, index) => {
    return (
      <TableRow key={index}>
        <TableCell className="font-medium">{data.states}</TableCell>
        <TableCell>{data.ifDigitInput}</TableCell>
        <TableCell>{data.ifAlphabets}</TableCell>
        <TableCell>{data.ifDot}</TableCell>
      </TableRow>
    );
  });
  return (
    <div>
      <div>
        Q ={" "}
        {`{S0, S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12, S13, S14, S15}`}
        <br />Σ = {`{all alphabets, digits from 0-9, dot(.) character}`}
        <br />
        q₀ = S0
        <br />F = {`{S15}`}
        <br />
        δ: Q × Σ → Q
      </div>

      <div className="flex justify-center items-center w-full">
        <Table>
          <TableCaption>δ: Q × Σ → Q</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-middle"></TableHead>
              <TableHead className="w-[100px] text-middle">0-9</TableHead>
              <TableHead className="w-[100px] text-middle">Alphabets</TableHead>
              <TableHead className="w-[100px] text-middle">Dot(.)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableBodyEl}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Model;
