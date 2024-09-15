import { Badge } from "./badge";

type TicketDiversityItem = {
  name: string;
  categories: string[];
};



const TeamTicketDiversity= ({ticketDiversity}: {ticketDiversity: TicketDiversityItem[]}) => {
  if(ticketDiversity[0]?.name === "") return null;
  return (
    <div className="p-4 bg-white border shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Ticket Diversity</h2>
      {ticketDiversity.map((item, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-md font-medium mb-2">{item.name}</h3>
          <div className="flex flex-wrap gap-2">
            {item.categories.map((category, idx) => (
              <Badge key={idx} variant="outline" className="ml-2">
                {category}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamTicketDiversity;
