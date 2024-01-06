import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ModalQuote from "../Components/ModalQuote";

export const ServicesTabs = [
  {
    id: 0,
    title: "Basic General Services",
    contain: (
      <section className="service__tab">
        <div className="service__principal">
          {/* PRINCIPAL */}
          <p className="paragraph">
            Routine cleaning of common areas, including dusting, vacuuming, and
            mopping to maintain general cleanliness.
          </p>
          <div className="accordion__container">
            <Accordion defaultExpanded>
              <AccordionSummary
                sx={{ backgroundColor: "#F2F7FD" }}
                expandIcon={<ExpandMore fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="paragraph__bold">
                  Bedroom, Living Room, and Lounge Cleaning
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <li className="paragraph">Dust cleaning</li>
                <li className="paragraph">Door handles and light switches</li>
                <li className="paragraph">
                  Dusting/ventilation grille cleaning, superficial air
                  conditioner fronts
                </li>
                <li className="paragraph">Interior glass: Doors and mirrors</li>
                <li className="paragraph">
                  Window sills/rails and window sills.
                </li>
                <li className="paragraph">Sweep and mop hard surface floors</li>
                <li className="paragraph">Vacuum carpets and rugs</li>
                <li className="paragraph">
                  1-2 sliding entry/exit doors included
                </li>
              </AccordionDetails>
            </Accordion>
            <Accordion>
  <AccordionSummary
    sx={{ backgroundColor: "#F2F7FD" }}
    expandIcon={<ExpandMore fontSize="large" />}
    aria-controls="panel1a-content"
    id="panel1a-header"
  >
    <p className="paragraph__bold">Bathroom Cleaning:</p>
  </AccordionSummary>
  <AccordionDetails>
    <li className="paragraph">Surfaces</li>
    <li className="paragraph">
      Door handles and light switches
    </li>
    <li className="paragraph">Showers and tubs</li>
    <li className="paragraph">Toilets</li>
    <li className="paragraph">
      Interior glass: windows, doors, mirrors
    </li>
    <li className="paragraph">Trim and molding work</li>
    <li className="paragraph">
      Dust entry vents and air return grilles
    </li>
    <li className="paragraph">
      Interior glass: windows, doors, mirrors
    </li>
  </AccordionDetails>
</Accordion>
<Accordion>
  <AccordionSummary
    sx={{ backgroundColor: "#F2F7FD" }}
    expandIcon={<ExpandMore fontSize="large" />}
    aria-controls="panel1a-content"
    id="panel1a-header"
  >
    <p className="paragraph__bold">Kitchen Cleaning:</p>
  </AccordionSummary>
  <AccordionDetails>
    <li className="paragraph">Countertops</li>
    <li className="paragraph">
      Surfaces: all cabinets, stove, refrigerator
    </li>
    <li className="paragraph">Microwave inside and outside</li>
    <li className="paragraph">Sinks and fixtures</li>
    <li className="paragraph">
      Clean exterior of cabinets and drawers
    </li>
    <li className="paragraph">
      Covers for light switches and outlets
    </li>
    <li className="paragraph">
      Sweep and mop hard surface floors
    </li>
    <li className="paragraph">Vacuum carpets and rugs</li>
    <li className="paragraph">Kitchen hood cleaning</li>
    <li className="paragraph">
      Windowsills/rails and window sills
    </li>
  </AccordionDetails>
</Accordion>
          </div>
        </div>
        <div className="service__quote">
          <p className="paragraph__bold">
            Curious about the cost? Get your free quote now!
          </p>
          <ModalQuote />
        </div>
        <p className="paragraph__bold">
          NOTE:
          <span className="paragraph">
            It&#39;s worth mentioning that the cleaning service can include its
            own customized package, so we recommend asking or contacting for
            better assistance.
          </span>
        </p>
        {/* EXTRAS */}
        <div className="service__extras">
          <div className="accordion__container">
            <Accordion defaultExpanded>
              <AccordionSummary
                sx={{ backgroundColor: "#e1e3e6" }}
                expandIcon={<ExpandMore fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="paragraph__bold">EXTRAS/ADDITIONAL SERVICES</p>
              </AccordionSummary>
              <AccordionDetails>
                <li className="paragraph__bold">
                  Appliance Interior Cleaning:
                  <span className="paragraph">
                    Cleaning and disinfection of the interior of kitchen
                    appliances such as refrigerators.
                  </span>
                </li>
                <li className="paragraph__bold">
                  Blinds and Curtains Cleaning:
                  <span className="paragraph">
                    Cleaning of blinds, curtains, and drapes to eliminate dust
                    and allergens.
                  </span>
                </li>
                <li className="paragraph__bold">
                  Window Cleaning:
                  <span className="paragraph">
                    Cleaning of interior and exterior windows for a clear and
                    streak-free view.
                  </span>
                </li>
                <li className="paragraph__bold">
                  Garage Cleaning:
                  <span className="paragraph">
                    Cleaning and organization of the garage, including sweeping
                    and tidying up.
                  </span>
                </li>
                <li className="paragraph__bold">
                  Patio and Outdoor Cleaning:
                  <span className="paragraph">
                    Cleaning of outdoor spaces, including patios, terraces, and
                    furniture.
                  </span>
                </li>
                <li className="paragraph__bold">
                  Dishwashing:
                  <span className="paragraph">
                    Handwashing or loading and unloading the dishwasher.
                  </span>
                </li>
                <li className="paragraph__bold">
                  Laundry Services:
                  <span className="paragraph">
                    Washing, drying, folding, and ironing of clothes and linens.
                  </span>
                </li>
                <li className="paragraph__bold">
                  Organization and Tidying Up:
                  <span className="paragraph">
                    Sorting and organizing spaces, including closets, cabinets,
                    and pantries. Mold and mildew removal, post-construction
                    cleaning, or pet hair removal.
                  </span>
                </li>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </section>
    ),
  },
  {
    id: 1,
    title: "Deep Cleaning",
    contain: (
      <section className="service__tab">
        <div className="service__principal">
          {/* PRINCIPAL */}
          <p className="paragraph">
            Thorough cleaning of all surfaces, appliances, and hidden corners,
            focusing on accumulated dirt and grime.
          </p>
          <div className="accordion__container">
            <Accordion defaultExpanded>
              <AccordionSummary
                sx={{ backgroundColor: "#F2F7FD" }}
                expandIcon={<ExpandMore fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="paragraph__bold">Deep House Kitchen Checklist</p>
              </AccordionSummary>
              <AccordionDetails>
                <li className="paragraph">
                  Clean and disinfect the garbage bin
                </li>
                <li className="paragraph">
                  Clean the microwave. (inside and outside)
                </li>
                <li className="paragraph">Clean the dishwasher thoroughly.</li>
                <li className="paragraph">
                  Clean the inside of the refrigerator and organize.
                </li>
                <li className="paragraph">Clean and organize the freezer.</li>
                <li className="paragraph">Vacuum refrigerator coils.</li>
                <li className="paragraph">Clean the oven (inside the oven).</li>
                <li className="paragraph">
                  Clean the range hood vent and change the filter if necessary.
                </li>
                <li className="paragraph">Clean stove burners.</li>
                <li className="paragraph">
                  Clean and disinfect the garbage disposal.
                </li>
                <li className="paragraph">
                  Clean and organize plastic utensils and storage containers.
                </li>
                <li className="paragraph">
                  Rearrange kitchen cabinets and drawers (inside and outside).
                </li>
                <li className="paragraph">
                  Clean and organize kitchen drawers.
                </li>
                <li className="paragraph">
                  Clean and disinfect the coffee maker.
                </li>
                <li className="paragraph">
                  Clean and disinfect small appliances.
                </li>
                <li className="paragraph">
                  Clean under the sink and remove unnecessary items.
                </li>
                <li className="paragraph">Clean cabinet doors thoroughly.</li>
                <li className="paragraph">Deep clean floors.</li>
                <li className="paragraph">
                  Dust ceiling moldings, wall corners, and floor moldings.
                </li>
                <li className="paragraph">Scrub walls.</li>
                <li className="paragraph">
                  Clean and disinfect light switches and outlets.
                </li>
                <li className="paragraph">Dust from top to bottom.</li>
                <li className="paragraph">Wash table cushions.</li>
                <li className="paragraph">Clean light fixtures.</li>
                <li className="paragraph">
                  Disinfect the table and clean all chairs, including legs and
                  underneath.
                </li>
                <li className="paragraph">
                  Remove the rug, shake it out, vacuum, and clean the floor
                  before replacing the rug.
                </li>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                sx={{ backgroundColor: "#F2F7FD" }}
                expandIcon={<ExpandMore fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="paragraph__bold">
                  Deep Cleaning Checklist for Dining Room
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <li className="paragraph">Remove unnecessary items</li>
                <li className="paragraph">
                  Clean door handles and light switches
                </li>
                <li className="paragraph">Showers and bathtubs</li>
                <li className="paragraph">Toilets</li>
                <li className="paragraph">
                  Interior glass: windows, doors, mirrors
                </li>
                <li className="paragraph">Trim and molding work</li>
                <li className="paragraph">
                  Dust entry grilles and air return grilles
                </li>
                <li className="paragraph">
                  Interior glass: windows, doors, mirrors
                </li>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                sx={{ backgroundColor: "#F2F7FD" }}
                expandIcon={<ExpandMore fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="paragraph__bold">
                  Deep Cleaning Checklist for Bathrooms:
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <li className="paragraph">
                  Always remember to clean from top to bottom
                </li>
                <li className="paragraph">Clean ceiling air vents</li>
                <li className="paragraph">
                  Clean and disinfect light switches and fixtures
                </li>
                <li className="paragraph">
                  Clean and disinfect toothbrush holders
                </li>
                <li className="paragraph">
                  Clean and refill soap dish and/or dispenser
                </li>
                <li className="paragraph">Clean light fixtures</li>
                <li className="paragraph">Clean mirror</li>
                <li className="paragraph">Clean shower curtain and liner</li>
                <li className="paragraph">
                  Clean the door frame of the shower
                </li>
                <li className="paragraph">
                  Clean the plastic strip at the bottom of a glass shower door
                </li>
                <li className="paragraph">Disinfect countertops</li>
                <li className="paragraph">
                  Dust and clean windows, inside and outside
                </li>
                <li className="paragraph">Mop and scrub floors</li>
                <li className="paragraph">
                  Scrub and disinfect the toilet, including around the base,
                  under the seat, and around hinges
                </li>
                <li className="paragraph">Scrub the tub and/or shower</li>
                <li className="paragraph">Scrub walls (some stains)</li>
                <li className="paragraph">Clean the toilet</li>
                <li className="paragraph">
                  Clean the garbage can (inside and outside)
                </li>
                <li className="paragraph">
                  Clean cabinets, knobs, towel racks, and toilet paper holders
                </li>
                <li className="paragraph">Clean the bathroom exhaust fan</li>
                <li className="paragraph">Clean showerhead</li>
                <li className="paragraph">
                  Clean, organize, and tidy up cabinets and drawers
                </li>
                <li className="paragraph">
                  Clean, organize, and tidy up the bathroom closet
                </li>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                sx={{ backgroundColor: "#F2F7FD" }}
                expandIcon={<ExpandMore fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="paragraph__bold">
                  Deep Cleaning Checklist for Living Rooms/Family Areas:
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <li className="paragraph">
                  Remove anything that doesn&#39;t belong in the living room.
                </li>
                <li className="paragraph">
                  Dust ceiling moldings, wall corners, and floor moldings
                </li>
                <li className="paragraph">Vacuum the entire carpeted area</li>
                <li className="paragraph">
                  Vacuum under furniture and between cushions
                </li>
                <li className="paragraph">Dust ceiling fans</li>
                <li className="paragraph">
                  Clean lights and wash light globes
                </li>
                <li className="paragraph">Dust lamps</li>
                <li className="paragraph">
                  Dust edges of upholstery, mirrors, and pictures
                </li>
                <li className="paragraph">Clean windows and sills</li>
                <li className="paragraph">
                  Remove wear marks from doors and moldings
                </li>
                <li className="paragraph">Dust electronics</li>
                <li className="paragraph">
                  Disinfect remote controls and electronic devices
                </li>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                sx={{ backgroundColor: "#F2F7FD" }}
                expandIcon={<ExpandMore fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="paragraph__bold">
                  Deep Cleaning Checklist for Bedrooms:
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <li className="paragraph">
                  Remove anything that doesn&#39;t belong in the bedroom.
                </li>
                <li className="paragraph">
                  Dust ceiling, corners, and upper and lower ceiling moldings
                </li>
                <li className="paragraph">Dust baseboards and window sills</li>
                <li className="paragraph">Dust and polish furniture</li>
                <li className="paragraph">
                  Dust edges of upholstery, mirrors, and pictures
                </li>
                <li className="paragraph">Clean glass and mirrors</li>
                <li className="paragraph">Dust lamps</li>
                <li className="paragraph">Vacuum lampshades</li>
                <li className="paragraph">
                  Pick up, fold dirty laundry, and remove anything that
                  doesn&#39;t belong
                </li>
                <li className="paragraph">Clean light fixtures</li>
                <li className="paragraph">Organize the closet</li>
                <li className="paragraph">Clean mattress</li>
                <li className="paragraph">Clean under your bed</li>
                <li className="paragraph">Wash sheets</li>
                <li className="paragraph">Wash pillows</li>
                <li className="paragraph">Clean windows and sills</li>
                <li className="paragraph">
                  Vacuum the carpet, including edges and under furniture
                </li>
                <li className="paragraph">
                  Disinfect door handles and light switch plates
                </li>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className="service__quote">
          <p className="paragraph__bold">
            Curious about the cost? Get your free quote now!
          </p>
          <ModalQuote />
        </div>
        <p className="paragraph__bold">
          NOTE:
          <span className="paragraph">
            It&#39;s worth mentioning that the cleaning service can include its
            own customized package, so we recommend asking or contacting for
            better assistance.
          </span>
        </p>
        {/* EXTRAS */}
        <div className="service__extras">
          <Accordion defaultExpanded className="accordion__container">
            <AccordionSummary
              sx={{ backgroundColor: "#e1e3e6" }}
              expandIcon={<ExpandMore fontSize="large" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <p className="paragraph__bold">EXTRAS/ADICIONALES</p>
            </AccordionSummary>
            <AccordionDetails>
              <p className="paragraph__bold">
                Additional Deep Cleaning Checklist for the House:
              </p>
              <li className="paragraph">
                Carpet cleaning/stain removal beyond vacuuming
              </li>
              <li className="paragraph">Unclogging drains and pipes</li>
              <li className="paragraph">Window washing</li>
              <li className="paragraph">Porch and patio cleaning</li>
              <li className="paragraph">
                Repair or cleaning of small appliances
              </li>
              <li className="paragraph">
                Restoration of fire and water damage
              </li>
              <li className="paragraph">
                Repair of scratches or damage to wood
              </li>
              <li className="paragraph">Sanitization of trash bins</li>
              <li className="paragraph">Faucet descaling</li>
              <li className="paragraph">Vent cover cleaning</li>
              <li className="paragraph">Freezer thawing and cleaning</li>
              <li className="paragraph">Dishwasher cleaning</li>
              <li className="paragraph">Washing dishes, pots, and pans</li>
              <li className="paragraph">Bathroom curtain cleaning</li>
              <li className="paragraph">Aerator cleaning</li>
              <li className="paragraph">Decreasing kitchen hood</li>
              <li className="paragraph">Clutter pickup</li>
              <li className="paragraph">Tile grout</li>
            </AccordionDetails>
          </Accordion>
        </div>
      </section>
    ),
  },
  {
    id: 2,
    title: "Office Cleaning",
    contain: (
      <section className="service__tab">
        <div className="service__principal">
          {/* PRINCIPAL */}
          <p className="paragraph">
            Periodic cleaning and maintenance of office spaces, including
            dusting, surface cleaning, trash removal, including desks, floors,
            bathrooms, and common areas.
          </p>
          <div className="accordion__container">
            <Accordion defaultExpanded>
              <AccordionSummary
                sx={{ backgroundColor: "#F2F7FD" }}
                expandIcon={<ExpandMore fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="paragraph__bold">This includes</p>
              </AccordionSummary>
              <AccordionDetails>
                <li className="paragraph">
                  Cleaning and sanitation covering a wide range of facilities,
                  including school offices, small, medium, or large businesses,
                  and buildings.
                </li>
                <li className="paragraph__bold">
                  Bathroom Cleaning:
                  <span className="paragraph">
                    Thorough cleaning and disinfection of bathrooms to ensure
                    hygiene and prevent germ spread.
                  </span>
                </li>
                <li className="paragraph__bold">
                  Trash Removal:
                  <span className="paragraph">
                    Emptying and replacing garbage bags in commercial containers
                    and waste disposal areas.
                  </span>
                </li>
                <li className="paragraph__bold">
                  Dusting and Surface Cleaning:
                  <span className="paragraph">
                    Regularly dust surfaces such as desks, shelves, and
                    equipment to maintain a clean and tidy workspace.
                  </span>
                </li>
                <li className="paragraph__bold">
                  High Dust Cleaning:
                  <span className="paragraph">
                    Removal of dust and cobwebs from high and hard-to-reach
                    areas, such as lamps and ceiling corners.
                  </span>
                </li>
                <li className="paragraph__bold">
                  Blinds and Curtains Cleaning:
                  <span className="paragraph">
                    Cleaning and maintenance of blinds and curtains to eliminate
                    dust and allergens.
                  </span>
                </li>
                <li className="paragraph__bold">
                  Custom Cleaning Plans:
                  <span className="paragraph">
                    Custom cleaning plans to meet the specific needs of each
                    facility.
                  </span>
                </li>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className="service__quote">
          <p className="paragraph__bold">
            Curious about the cost? Get your free quote now!
          </p>
          <ModalQuote />
        </div>

        <p className="paragraph__bold">
          NOTE:
          <span className="paragraph">
            It is worth mentioning that the cleaning service can include its own
            customized package; therefore, we recommend asking or contacting us
            for better assistance.
          </span>
        </p>
      </section>
    ),
  },
  {
    id: 3,
    title: "Recurring Cleaning",
    contain: (
      <section className="service__tab">
        <div className="service__principal">
          {/* PRINCIPAL */}
          <p className="paragraph">
            It&#39;s a routine cleaning, which can be done weekly, every 15
            days, or monthly. Within this type, there are general, deep, or
            office cleanings.
          </p>
          <div className="accordion__container">
            <Accordion defaultExpanded>
              <AccordionSummary
                sx={{ backgroundColor: "#F2F7FD" }}
                expandIcon={<ExpandMore fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="paragraph__bold">
                  Bedroom, Living Room, and Lounge Cleaning
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <li className="paragraph">Dust cleaning</li>
                <li className="paragraph">Door handles and light switches</li>
                <li className="paragraph">
                  Clean/dust ventilation grilles, front surfaces of air
                  conditioners (superficial)
                </li>
                <li className="paragraph">Interior glass: Doors and mirrors</li>
                <li className="paragraph">Sills/rails and window sills</li>
                <li className="paragraph">Sweep and mop hard surface floors</li>
                <li className="paragraph">Vacuum carpets and rugs</li>
                <li className="paragraph">
                  1-2 sliding entry/exit doors included
                </li>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                sx={{ backgroundColor: "#F2F7FD" }}
                expandIcon={<ExpandMore fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="paragraph__bold">Bathroom Cleaning:</p>
              </AccordionSummary>
              <AccordionDetails>
                <li className="paragraph">Surfaces</li>
                <li className="paragraph">Door handles and light switches</li>
                <li className="paragraph">Showers and bathtubs</li>
                <li className="paragraph">Toilets</li>
                <li className="paragraph">
                  Interior glass: Windows, doors, mirrors
                </li>
                <li className="paragraph">Trim and molding work</li>
                <li className="paragraph">
                  Dust entry grilles and air return grilles
                </li>
                <li className="paragraph">
                  Interior glass: Windows, doors, mirrors
                </li>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                sx={{ backgroundColor: "#F2F7FD" }}
                expandIcon={<ExpandMore fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="paragraph__bold">Kitchen Cleaning:</p>
              </AccordionSummary>
              <AccordionDetails>
                <li className="paragraph">Countertops</li>
                <li className="paragraph">
                  Surfaces: all cabinets, stove, refrigerator
                </li>
                <li className="paragraph">Microwave inside and outside</li>
                <li className="paragraph">Sinks and fixtures</li>
                <li className="paragraph">
                  Clean the exterior of cabinets and drawers
                </li>
                <li className="paragraph">
                  Covers for light switches and outlets
                </li>
                <li className="paragraph">Sweep and mop hard surface floors</li>
                <li className="paragraph">Vacuum carpets and rugs</li>
                <li className="paragraph">Kitchen hood cleaning</li>
                <li className="paragraph">
                  Sills/rails of windows and baseboards
                </li>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                sx={{ backgroundColor: "#F2F7FD" }}
                expandIcon={<ExpandMore fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="paragraph__bold">Deep House Kitchen Checklist</p>
              </AccordionSummary>
              <AccordionDetails>
                <li className="paragraph">Clean and disinfect the trash can</li>
                <li className="paragraph">
                  Clean the microwave. (inside and outside)
                </li>
                <li className="paragraph">Clean the dishwasher thoroughly.</li>
                <li className="paragraph">
                  Clean the inside of the refrigerator and organize
                </li>
                <li className="paragraph">Clean and organize the freezer</li>
                <li className="paragraph">Vacuum refrigerator coils</li>
                <li className="paragraph">Clean the oven (inside the oven)</li>
                <li className="paragraph">
                  Clean the hood ventilation and change the filter if necessary
                </li>
                <li className="paragraph">Clean stove burners</li>
                <li className="paragraph">
                  Clean and disinfect the garbage disposal
                </li>
                <li className="paragraph">
                  Clean and organize plastic utensils and storage containers.
                </li>
                <li className="paragraph">
                  Rearrange kitchen cabinets and drawers. (interior and exterior
                  cabinets)
                </li>
                <li className="paragraph">
                  Clean and organize kitchen drawers
                </li>
                <li className="paragraph">
                  Clean and disinfect the coffee maker
                </li>
                <li className="paragraph">
                  Clean and disinfect small appliances
                </li>
                <li className="paragraph">
                  Clean under the sink and remove unnecessary items
                </li>
                <li className="paragraph">Clean cabinet doors deeply</li>
                <li className="paragraph">Deep clean floors</li>
                <li className="paragraph">
                  Ceiling moldings dusted, wall corners, and floor moldings
                </li>
                <li className="paragraph">Scrub walls</li>
                <li className="paragraph">
                  Clean and disinfect light switches and outlets
                </li>
                <li className="paragraph">
                  Remove all dust from top to bottom
                </li>
                <li className="paragraph">Wash table cushions</li>
                <li className="paragraph">Clean light fixtures</li>
                <li className="paragraph">
                  Disinfect the table and clean all chairs, including legs and
                  underneath
                </li>
                <li className="paragraph">
                  Remove the rug, shake it, vacuum, and clean the floor before
                  replacing the rug.
                </li>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                sx={{ backgroundColor: "#F2F7FD" }}
                expandIcon={<ExpandMore fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="paragraph__bold">
                  Deep House Dining Room Cleaning Checklist
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <li className="paragraph">Remove unnecessary items</li>
                <li className="paragraph">Door handles and light switches</li>
                <li className="paragraph">Showers and bathtubs</li>
                <li className="paragraph">Toilets</li>
                <li className="paragraph">
                  Interior glass: Windows, doors, mirrors
                </li>
                <li className="paragraph">Trim and molding work</li>
                <li className="paragraph">
                  Dust entry grilles and air return grilles
                </li>
                <li className="paragraph">
                  Interior glass: Windows, doors, mirrors
                </li>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                sx={{ backgroundColor: "#F2F7FD" }}
                expandIcon={<ExpandMore fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="paragraph__bold">
                  Deep House Cleaning for Bathrooms:
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <li className="paragraph">
                  Always remember to clean from top to bottom
                </li>
                <li className="paragraph">Clean ceiling air vents</li>
                <li className="paragraph">
                  Clean and disinfect switches and light fixtures
                </li>
                <li className="paragraph">
                  Clean and disinfect toothbrush holders
                </li>
                <li className="paragraph">
                  Clean and refill soap dish and/or pump
                </li>
                <li className="paragraph">Clean light fixtures</li>
                <li className="paragraph">Clean mirrors</li>
                <li className="paragraph">Clean shower curtain and liner</li>
                <li className="paragraph">Clean shower door frame</li>
                <li className="paragraph">
                  Clean plastic strip at the bottom of a glass shower door
                </li>
                <li className="paragraph">Disinfect countertops</li>
                <li className="paragraph">
                  Dust and clean windows, inside and outside
                </li>
                <li className="paragraph">Mop and scrub floors</li>
                <li className="paragraph">
                  Scrub and disinfect the toilet, including around the base,
                  under the seat, and around hinges
                </li>
                <li className="paragraph">Scrub the tub and/or shower</li>
                <li className="paragraph">Scrub walls. (some stains)</li>
                <li className="paragraph">Wash the toilet</li>
                <li className="paragraph">
                  Wash the trash can (inside and outside)
                </li>
                <li className="paragraph">
                  Clean cabinets, knobs, towel racks, and toilet paper holders
                </li>
                <li className="paragraph">Clean bathroom exhaust fan</li>
                <li className="paragraph">Clean showerhead</li>
                <li className="paragraph">
                  Clean, organize, and tidy cabinets and drawers
                </li>
                <li className="paragraph">
                  Clean, organize, and tidy the bathroom closet
                </li>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                sx={{ backgroundColor: "#F2F7FD" }}
                expandIcon={<ExpandMore fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="paragraph__bold">
                  Deep Cleaning Checklist for Living/Family Areas:
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <li className="paragraph">
                  Remove anything that doesn&#39;t belong in the living room.
                </li>
                <li className="paragraph">
                  Dust ceiling moldings, wall corners, and floor moldings
                </li>
                <li className="paragraph">Vacuum the entire carpeted area</li>
                <li className="paragraph">
                  Vacuum under furniture and between cushions
                </li>
                <li className="paragraph">Dust ceiling fans</li>
                <li className="paragraph">
                  Clean lights and wash light globes
                </li>
                <li className="paragraph">Dust lamps</li>
                <li className="paragraph">
                  Dust tapestries, mirrors, and pictures edges
                </li>
                <li className="paragraph">Clean windows and sills</li>
                <li className="paragraph">
                  Remove scuff marks from doors and moldings
                </li>
                <li className="paragraph">Dust electronics</li>
                <li className="paragraph">
                  Disinfect remote controls and electronic devices
                </li>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                sx={{ backgroundColor: "#F2F7FD" }}
                expandIcon={<ExpandMore fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="paragraph__bold">
                  Deep Cleaning Checklist for Bedrooms:
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <li className="paragraph">
                  Remove anything that doesn&#39;t belong in the bedroom.
                </li>
                <li className="paragraph">
                  Dust ceiling, corners, and upper and lower crown moldings
                </li>
                <li className="paragraph">Dust baseboards and window sills</li>
                <li className="paragraph">Dust and polish furniture</li>
                <li className="paragraph">
                  Dust tapestries, mirrors, and pictures edges
                </li>
                <li className="paragraph">Clean glass and mirrors</li>
                <li className="paragraph">Dust lamps</li>
                <li className="paragraph">Vacuum lampshades</li>
                <li className="paragraph">
                  Collect, fold dirty laundry, and remove anything that
                  doesn&#39;t belong
                </li>
                <li className="paragraph">Clean light fixtures</li>
                <li className="paragraph">Organize the closet</li>
                <li className="paragraph">Clean mattress</li>
                <li className="paragraph">Clean under your bed</li>
                <li className="paragraph">Wash sheets</li>
                <li className="paragraph">Wash pillows</li>
                <li className="paragraph">Clean windows and sills</li>
                <li className="paragraph">
                  Vacuum the carpet, including edges and under furniture
                </li>
                <li className="paragraph">
                  Disinfect door handles and light switch plates
                </li>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className="service__quote">
          <p className="paragraph__bold">
            Curious about the cost? Get your free quote now!
          </p>
          <ModalQuote />
        </div>
        <p className="paragraph__bold">
          NOTE:
          <span className="paragraph">
            It&#39;s worth mentioning that the cleaning service can include its
            own customized package, so we recommend asking or contacting for
            better assistance.
          </span>
        </p>
      </section>
    ),
  },
  {
    id: 4,
    title: "Removal Cleaning",
    contain: (
      <section className="service__tab">
        <div className="service__principal">
          {/* PRINCIPAL */}
          <p className="paragraph">
            Exhaustive entry and exit cleaning for new occupants moving into a
            property or vacating it.
          </p>
          <div className="accordion__container">
            <Accordion defaultExpanded>
              <AccordionSummary
                sx={{ backgroundColor: "#F2F7FD" }}
                expandIcon={<ExpandMore fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="paragraph__bold">Move-out Cleaning Service</p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="paragraph">
                  When leaving your current residence, it is essential to leave
                  it in perfect condition for the next occupants or ensure you
                  get your security deposit back. Our move-out cleaning services
                  are meticulously designed to meet the highest cleaning
                  standards. Our experienced cleaning team:
                </p>
                <ul>
                  <li className="paragraph__bold">
                    Thoroughly clean all rooms:
                    <span className="paragraph">
                      leaving no corner untouched, we clean every room deeply to
                      ensure it&#39;s ready for the next inhabitants.
                    </span>
                  </li>
                  <li className="paragraph__bold">
                    Appliance cleaning:
                    <span className="paragraph">
                      we clean and disinfect appliances such as ovens,
                      refrigerators, and microwaves, leaving them spotless for
                      the new residents.
                    </span>
                  </li>
                  <li className="paragraph__bold">
                    Floor-to-ceiling cleaning:
                    <span className="paragraph">
                      our team will clean and sanitize floors, walls, and
                      ceilings to eliminate any trace of dirt, dust, or stains.
                    </span>
                  </li>
                  <li className="paragraph__bold">
                    Bathroom details:
                    <span className="paragraph">
                      we meticulously clean and disinfect bathrooms, ensuring
                      fixtures, tiles, and surfaces shine.
                    </span>
                  </li>
                  <li className="paragraph__bold">
                    Customized services:
                    <span className="paragraph">
                      we tailor our services to your specific needs and lease
                      requirements, ensuring compliance with moving cleaning
                      standards.
                    </span>
                  </li>
                  <li className="paragraph__bold">
                    Flexible scheduling:
                    <span className="paragraph">
                      we work with your moving schedule, ensuring your space is
                      clean and ready for the next occupants as needed.
                    </span>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                sx={{ backgroundColor: "#F2F7FD" }}
                expandIcon={<ExpandMore fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="paragraph__bold">Move-in Cleaning Service</p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="paragraph">
                  Moving into a new house is an exciting adventure, but it&#39;s
                  essential to start fresh in a clean and healthy environment.
                  Our move-in cleaning services are designed to give you a clean
                  slate, making your new space feel like home from day one.
                  Here&#39;s what we offer:
                </p>
                <ul>
                  <li className="paragraph__bold">
                    Thorough cleaning:
                    <span className="paragraph">
                      we make sure all corners are cleaned, removing any residue
                      or dust left by previous occupants.
                    </span>
                  </li>
                  <li className="paragraph__bold">
                    Disinfection:
                    <span className="paragraph">
                      we disinfect bathrooms, kitchens, and high-touch areas to
                      provide you with a clean and hygienic living space.
                    </span>
                  </li>
                  <li className="paragraph__bold">
                    Customized cleaning:
                    <span className="paragraph">
                      our services can be tailored to your preferences and
                      priorities, focusing on the areas that matter most to you.
                    </span>
                  </li>
                  <li className="paragraph__bold">
                    Efficiency:
                    <span className="paragraph">
                      we work quickly and efficiently to accommodate your moving
                      schedule, ensuring your new home is move-in ready when you
                      need it.
                    </span>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className="service__quote">
          <p className="paragraph__bold">
            Curious about the cost? Get your free quote now!
          </p>
          <ModalQuote />
        </div>
        <p className="paragraph__bold">
          NOTE:
          <span className="paragraph">
            It&#39;s worth mentioning that the cleaning service can include its
            own customized package, so we recommend asking or getting in touch
            for better assistance.
          </span>
        </p>
      </section>
    ),
  },
  {
    id: 5,
    title: "Post-construction cleaning",
    contain: (
      <section className="service__tab">
        <div className="service__principal">
          {/* PRINCIPAL */}
          <p className="paragraph">
            Thorough cleaning of commercial spaces after construction or
            renovations to remove dust and debris.
          </p>
          <div className="accordion__container">
            <Accordion defaultExpanded>
              <AccordionSummary
                sx={{ backgroundColor: "#F2F7FD" }}
                expandIcon={<ExpandMore fontSize="large" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="paragraph__bold">This includes</p>
              </AccordionSummary>
              <AccordionDetails>
                <li className="paragraph">Remove tapes, stickers</li>
                <li className="paragraph">
                  Dust, ceiling (easy access), lamps, etc.
                </li>
                <li className="paragraph">
                  Sweep and vacuum all floors and window sills
                </li>
                <li className="paragraph">
                  Mop and tiles, sinks, polish stainless steel, clean walls
                </li>
                <li className="paragraph">
                  Sweep the entire interior and exterior of the unit
                </li>
                <li className="paragraph">Scrape and sweep the floor</li>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className="service__quote">
          <p className="paragraph__bold">
            Curious about the cost? Get your free quote now!
          </p>
          <ModalQuote />
        </div>
        <p className="paragraph__bold">
          NOTE:
          <span className="paragraph">
            It&#39;s worth mentioning that the cleaning service can include its
            own customized package, so we recommend asking or getting in touch
            for better assistance.
          </span>
        </p>
      </section>
    ),
  },
];
