import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles';

const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontSize: "2.2rem",
    '@media (max-width: 768px)': {
        fontSize: '1.8rem', // Tamaño de fuente más pequeño para pantallas pequeñas
      },
   
    "&:hover": {
      color: "#4BA6DB",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "#1976d2",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#d1eaff",
    },
  })
);

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsServices() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 2, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="basic tabs example"
        >
          <AntTab label="Basic general services" {...a11yProps(0)} />
          <AntTab label="Limpieza profunda" {...a11yProps(1)} />
          <AntTab label="Limpieza de oficinas" {...a11yProps(2)} />
          <AntTab label="Limpieza recurrente" {...a11yProps(3)} />
          <AntTab label="Limpieza mudanzas" {...a11yProps(4)} />
          <AntTab label="Post-construction cleaning" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <section className="service__one">
          <div className="service__information">
            <p className="paragraph">
              Limpieza de rutina de áreas comunes, que incluye quitar el polvo,
              pasar la aspiradora y trapear para mantener la limpieza general.
            </p>
          </div>
          <div className="service__extras"></div>
        </section>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <section className="service__one">
          <div className="service__information">
            <p className="paragraph">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Id recusandae quo accusamus odio fugiat temporibus atque blanditiis consectetur sapiente. Perferendis sint, impedit voluptatibus ut alias odit, id laborum molestias unde mollitia aspernatur praesentium maxime fugiat quam eos assumenda itaque reiciendis! Praesentium necessitatibus tempora enim minima, voluptatem obcaecati. Enim magni nihil vero, suscipit, quidem atque, nesciunt repellat voluptas quae minus beatae accusamus pariatur. Qui ab necessitatibus cum natus iusto enim esse in recusandae, nulla quis vel, doloremque illum quam delectus error vero quaerat. Maiores quasi quis aperiam dignissimos voluptate dolores dolorum nesciunt eius saepe. Eveniet ipsam aperiam molestias porro, in odio suscipit facilis aspernatur vero, modi beatae illo et fuga quaerat temporibus a reiciendis minima expedita ullam non! Optio, veniam ipsa eum voluptas earum iusto recusandae animi quod assumenda, eius mollitia et iure in distinctio dolore magnam, aperiam voluptate fugit modi. Adipisci, modi? Aspernatur, numquam. Illum maxime architecto ut ab soluta, veniam nostrum doloremque voluptatibus quidem quisquam. Saepe quisquam adipisci officiis ut voluptas animi, deleniti, laborum in, repellat laboriosam non. Alias eum nesciunt nisi eius esse provident natus, tempore minima sit deleniti ad recusandae odio adipisci ex, ipsa mollitia molestias cupiditate laudantium illo ea quos atque tenetur quia eveniet. Quae alias hic quod, voluptatem quaerat vitae cumque explicabo ut a ratione incidunt! Corporis at exercitationem soluta ducimus asperiores, distinctio odio nam autem nobis aliquid sunt non. Cumque assumenda, neque fugit perspiciatis id saepe vel repellat omnis laborum reiciendis doloremque! Odio autem impedit quaerat eligendi neque minima numquam harum cum ad aspernatur tenetur esse, unde iste itaque saepe qui vero dolore nostrum, architecto sint quam eius tempore quasi? Accusantium voluptate dolor deleniti, distinctio sunt, nemo assumenda, ab asperiores dolorem maiores ea quas facere enim iure quae inventore labore. Error quia sunt beatae, alias dignissimos cumque minus culpa at sapiente expedita ratione, modi iste aspernatur totam saepe commodi reiciendis sit cupiditate ex ipsum. Omnis molestias, commodi possimus soluta vero, accusamus cumque explicabo praesentium, assumenda nam corporis placeat nemo rem sapiente voluptatibus amet maxime quas. Optio beatae inventore unde ducimus commodi. Impedit fugit laudantium consectetur? Optio dolorem delectus rem nulla pariatur saepe facilis natus id molestiae incidunt animi reiciendis vel cum ipsam voluptatum est debitis temporibus placeat, inventore corporis! Deserunt inventore ipsam hic nam blanditiis, quae, totam illum dolore eum est earum eius, at sed? Cupiditate, in! Velit libero explicabo, pariatur quis eaque rem tenetur sint distinctio cum quam. Molestiae perferendis numquam vero. Illum animi provident nam sequi tenetur veritatis vitae recusandae neque illo eligendi minus ullam maiores deleniti voluptates qui saepe commodi praesentium dolorum unde dolores, quidem est earum sit? Omnis dolores quisquam, consectetur vel laborum delectus praesentium consequatur! Dignissimos officiis ipsa at laboriosam facilis, error accusantium tempora enim illum, voluptate beatae perspiciatis similique amet doloribus placeat mollitia sunt aliquam, itaque porro. Rerum ullam expedita labore? Dignissimos facere pariatur illum eius iste porro aliquid repellendus, ullam, corrupti nulla asperiores aliquam soluta quis dolorem aut. Quae facere tenetur doloribus iure optio architecto rerum a eveniet provident tempora inventore ex molestiae facilis enim error laudantium, quasi, suscipit rem atque nulla porro. Enim eos tenetur nisi placeat debitis inventore voluptate eius omnis, a cum optio natus illum harum esse aliquam corrupti nulla impedit! Eum excepturi ea fuga cum voluptatibus aliquam dolores delectus, laboriosam neque. Minima consequatur fugit nemo, eos officia non dignissimos ipsa incidunt cum vel laborum in, reiciendis possimus minus dolores debitis. Aliquam architecto, fugiat quibusdam dignissimos, vero saepe maxime earum vitae officia enim adipisci laudantium natus incidunt? Repudiandae rem repellendus tenetur quisquam quia ipsum amet minus deleniti, commodi quas vel modi vitae unde quis doloremque placeat nobis, inventore quo totam. Magnam doloremque corporis ad consequatur tempore rerum animi vitae unde delectus ex quaerat, laborum voluptas tempora ea reprehenderit? Aliquid asperiores sequi ipsum soluta natus repellat delectus, consequuntur laudantium consequatur officia deserunt nobis minus. Velit rerum consectetur soluta placeat suscipit, natus assumenda deserunt voluptatibus ut repellendus at sit perferendis quasi dolore, eligendi ex quis eius esse ducimus asperiores? Nulla voluptas ab fuga aliquam perferendis nostrum. Numquam culpa quam optio inventore, nemo officia temporibus nisi eos ipsam molestiae laudantium ratione deleniti quod quisquam praesentium ab et. Alias temporibus, reprehenderit voluptates animi odit non ratione perferendis ipsam expedita quisquam corrupti, quis modi nulla neque totam illo! Est maiores ratione voluptatum ea molestiae dolorem ad accusamus unde doloribus, eos cumque ipsum nobis vero sint inventore ducimus eligendi recusandae fuga nesciunt quia vel dicta, nostrum tenetur eaque! Consectetur atque incidunt, unde voluptatem blanditiis obcaecati libero asperiores aspernatur quis eius illum? Facilis veritatis neque praesentium delectus at? Aut numquam deleniti magni ea explicabo obcaecati alias! Officiis, alias dolor in quos tempore numquam qui distinctio maxime, tempora quod libero deserunt beatae rem nisi nesciunt ex assumenda magni voluptates vero eligendi! Voluptates, nam ex sunt quae ullam assumenda, quibusdam obcaecati facilis commodi odio dolor facere vero a ratione culpa sint. Exercitationem quas, dolore ratione sequi officiis veritatis ipsam nam laudantium repellendus architecto et voluptatem aperiam obcaecati quasi. Aliquid nostrum laborum necessitatibus? Rerum adipisci unde, totam tempore eligendi, iste sequi dolorum perferendis veniam excepturi velit. Inventore ad magnam quasi voluptatem ratione culpa quis. Quasi facere placeat fugiat quidem nostrum, autem a sequi voluptatibus sapiente fugit id delectus ea molestias velit eos saepe et odio repudiandae tempore cumque numquam voluptatem aliquid illo. Iusto non saepe, voluptatibus error sequi eveniet consequatur repudiandae amet natus aperiam nostrum sunt ex dolor fuga labore minima, eum quo ab pariatur repellat officiis eligendi, illo aspernatur. Cumque suscipit, error inventore modi dolor minus repellat aliquid, reiciendis quaerat dignissimos odio adipisci laboriosam, ea facilis cupiditate. Quas doloremque quae qui adipisci ea quaerat vel iure natus, consequuntur eveniet iste. Facilis unde dolor, dolore architecto laudantium reiciendis id quibusdam sed, ut, pariatur provident ipsum eaque aut autem blanditiis aspernatur! Aliquid aliquam incidunt sapiente quod tempore placeat magnam corporis molestiae soluta, aspernatur quidem sint unde possimus delectus voluptatibus facere accusantium. Nam consectetur ducimus sequi atque, nihil sunt fugiat repellendus possimus deleniti error explicabo optio ex blanditiis a inventore nostrum voluptatibus rem aliquid consequatur corporis alias libero vel! Magnam id unde debitis dicta ex autem?
            </p>
          </div>
          <div className="service__extras"></div>
        </section>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Item Four
      </CustomTabPanel>
    </Box>
  );
}
