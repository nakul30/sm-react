import React from 'react';
import { Link } from 'react-router-dom';
function Navbar(props) {
  return (
    <nav className="nav">
      <div className="left-div">
        <Link to="/">
        <img
          src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
          alt="logo"
        />
        </Link>
      </div>
      <div className="search-container">
        <img
          className="search-icon"
          src="data:image/png;base64,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"
          alt="search-icon"
        />
        <input placeholder="Search" />

        <div className="search-results">
          <ul>
            <li className="search-results-row">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAACUCAMAAAANv/M2AAAAkFBMVEXw8PAAAADp6OkADyP29vXNzs8dJDD////z8/MBFymsra4AABUAABr8/PwAEiX5+fkAAA3Fxsfe3t/X2NkABh23ubtTVVuPkZKdnp52eHoqMj0hKTRvc3cxMTVHSkxYWVwWGiGBg4VkZGYVGCcAAB5BQUAyN0ANER06OjsSHCo9QUkfISgMEiRoam9SU1NbX2WGrk9IAAAEvklEQVR4nO2ba3PqNhCGrYuPZUuWhC35EgwGDoGEJMf//99V5kzaJo0vMcVWO3q+BCZm5mW12l3tCs9zOBwOh8PhcDgcDofD4XA4HA6H4/8BwcSDV64v/wtgkuqizB7W64esLHRK8NKKBsFC7zMKJEMGJgHd7rWwXHaQXl6oQoiCKxQhRV8uaWCxk2BYAYUY22yrYuX7q6LcbhhDR1BBa40tVlsQKlrnPo5jbIgD7Oc1VSHYrsTS6r4m1jsaglOU/N2HsUiiEwjpTsfLKesm1i+KgwZ+DnImelSAqxcbVWN9VugcBV/9L4jOZm9q6/yaJE+Mv+oOzxX6ldNNYlsMCTIZgqhztwkNQpl9uQzL0YoC+x6vjffmga6FWAYCnxDNelefZBRtoE0OIgqEnlf9olfPCBUWmZrAA6VvXr9o743Sg0WmxsaKP7t34W9E9NOshkVhrwDosd/QrakfESjm0TMGaFa+GoxnQWV8CM6hZxTwAY0IZyYsorU1okkiOUgHvRUngEtrsiJZmcQxIpgJ81h/XJwR3IoekaKDVrQt4cOJnguSGjVjcp15zLfFpz1ojiz+cPTwAWfWRA8PXhQYroVEAdTFmjjteaU81sMZsT7Kcg414yARQJuh7ILTjcmb1niH0XNSrBgQLQqlTsOePyMlZVn/HiNJzahF3tHWQjsuo14r4kjynV2HxPhAEe3zapxSxA529WvaCo5uSaeDELKlYyrBeYnztofQpZqQtoOQ22XolgMIaYdqo5mG4DC3omFMdDDC6uSfQxaCk9p8odqeDP4XopUm1xp+ihDC02tpvk5qVeR4R8C67am/aRL8ueFwQHTFlNH8+bvYAoZ7cORs95incXAlTvPHF8oV2Ns7vyDB6hdjCAEAeFNVDTcvEGLs18rmSZEncFEroMIQUSkpCkPzpi48S13jHSISnZ+MhaXB/DnlOhE2m/k3BHsw1XlZVWWuU+h1p8nF+TgEJ0KYrRiLDza2bk4uUp0ONSChtipUE6y34DCQ8Uw83GqLjB3n56P60X8qIemFHc/W1EzE2wKuXvMBI2Jz3OJgO9TGngecZKbmeBoeyMZ6Y2qQLLEgN5Ika8tOf8S6x35bvg6cJeehrUjfxpUWGDZtjXpvRUMQYXwDVGODAhGVeTxbOEWK9pTVjBdBhLH1iBbaPRH6zGX9neEggbXk5yVbCWYTMrX5XtcI+xvFljx6kdwE6O9ePom1Ocjki8U9klIuy2/nOFFKTocqlbsRNJKPmgB8hEDAZbPQ3Q+ctIFgQjFxbews5NVxwyZ29uFJsWaR0unaJO/vlHZBihFN+LvQNskv0/YT9k9KLZFhiFdRWk50TFJSWi1QpGJ/PXwxpQsRvaKHBUYZOALoaWoIIMnT1P1wG3upsskRIM4UyP9NNeOADZPTT3zxXtJm/kEoZPyG6TzWAPHZRZNk5BC/4+NwiaR4vS4xveNFSHsjYe6dKDTgY+54dBGYj89+FBAR4OwW0WwZ0YjfIpqjnpvLd+Jm0ciJHocTPRet6DDAk1lsI4aJP5kkXEZ0iMANoL4fa9xLtKl4bmT+5EKS5vnHTTw383cR3n+ROh07BhkOh8PhcDgcDofD4XA4HA6Hw+FwjOUP4TNHyHvd+fEAAAAASUVORK5CYII="
                alt="user-dp"
              />
              <span>John Doe</span>
            </li>
            <li className="search-results-row">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAACUCAMAAAANv/M2AAAAkFBMVEXw8PAAAADp6OkADyP29vXNzs8dJDD////z8/MBFymsra4AABUAABr8/PwAEiX5+fkAAA3Fxsfe3t/X2NkABh23ubtTVVuPkZKdnp52eHoqMj0hKTRvc3cxMTVHSkxYWVwWGiGBg4VkZGYVGCcAAB5BQUAyN0ANER06OjsSHCo9QUkfISgMEiRoam9SU1NbX2WGrk9IAAAEvklEQVR4nO2ba3PqNhCGrYuPZUuWhC35EgwGDoGEJMf//99V5kzaJo0vMcVWO3q+BCZm5mW12l3tCs9zOBwOh8PhcDgcDofD4XA4HA6H4/8BwcSDV64v/wtgkuqizB7W64esLHRK8NKKBsFC7zMKJEMGJgHd7rWwXHaQXl6oQoiCKxQhRV8uaWCxk2BYAYUY22yrYuX7q6LcbhhDR1BBa40tVlsQKlrnPo5jbIgD7Oc1VSHYrsTS6r4m1jsaglOU/N2HsUiiEwjpTsfLKesm1i+KgwZ+DnImelSAqxcbVWN9VugcBV/9L4jOZm9q6/yaJE+Mv+oOzxX6ldNNYlsMCTIZgqhztwkNQpl9uQzL0YoC+x6vjffmga6FWAYCnxDNelefZBRtoE0OIgqEnlf9olfPCBUWmZrAA6VvXr9o743Sg0WmxsaKP7t34W9E9NOshkVhrwDosd/QrakfESjm0TMGaFa+GoxnQWV8CM6hZxTwAY0IZyYsorU1okkiOUgHvRUngEtrsiJZmcQxIpgJ81h/XJwR3IoekaKDVrQt4cOJnguSGjVjcp15zLfFpz1ojiz+cPTwAWfWRA8PXhQYroVEAdTFmjjteaU81sMZsT7Kcg414yARQJuh7ILTjcmb1niH0XNSrBgQLQqlTsOePyMlZVn/HiNJzahF3tHWQjsuo14r4kjynV2HxPhAEe3zapxSxA529WvaCo5uSaeDELKlYyrBeYnztofQpZqQtoOQ22XolgMIaYdqo5mG4DC3omFMdDDC6uSfQxaCk9p8odqeDP4XopUm1xp+ihDC02tpvk5qVeR4R8C67am/aRL8ueFwQHTFlNH8+bvYAoZ7cORs95incXAlTvPHF8oV2Ns7vyDB6hdjCAEAeFNVDTcvEGLs18rmSZEncFEroMIQUSkpCkPzpi48S13jHSISnZ+MhaXB/DnlOhE2m/k3BHsw1XlZVWWuU+h1p8nF+TgEJ0KYrRiLDza2bk4uUp0ONSChtipUE6y34DCQ8Uw83GqLjB3n56P60X8qIemFHc/W1EzE2wKuXvMBI2Jz3OJgO9TGngecZKbmeBoeyMZ6Y2qQLLEgN5Ika8tOf8S6x35bvg6cJeehrUjfxpUWGDZtjXpvRUMQYXwDVGODAhGVeTxbOEWK9pTVjBdBhLH1iBbaPRH6zGX9neEggbXk5yVbCWYTMrX5XtcI+xvFljx6kdwE6O9ePom1Ocjki8U9klIuy2/nOFFKTocqlbsRNJKPmgB8hEDAZbPQ3Q+ctIFgQjFxbews5NVxwyZ29uFJsWaR0unaJO/vlHZBihFN+LvQNskv0/YT9k9KLZFhiFdRWk50TFJSWi1QpGJ/PXwxpQsRvaKHBUYZOALoaWoIIMnT1P1wG3upsskRIM4UyP9NNeOADZPTT3zxXtJm/kEoZPyG6TzWAPHZRZNk5BC/4+NwiaR4vS4xveNFSHsjYe6dKDTgY+54dBGYj89+FBAR4OwW0WwZ0YjfIpqjnpvLd+Jm0ciJHocTPRet6DDAk1lsI4aJP5kkXEZ0iMANoL4fa9xLtKl4bmT+5EKS5vnHTTw383cR3n+ROh07BhkOh8PhcDgcDofD4XA4HA6Hw+FwjOUP4TNHyHvd+fEAAAAASUVORK5CYII="
                alt="user-dp"
              />
              <span>John Doe</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="right-nav">
        <div className="user">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAACUCAMAAAANv/M2AAAAkFBMVEXw8PAAAADp6OkADyP29vXNzs8dJDD////z8/MBFymsra4AABUAABr8/PwAEiX5+fkAAA3Fxsfe3t/X2NkABh23ubtTVVuPkZKdnp52eHoqMj0hKTRvc3cxMTVHSkxYWVwWGiGBg4VkZGYVGCcAAB5BQUAyN0ANER06OjsSHCo9QUkfISgMEiRoam9SU1NbX2WGrk9IAAAEvklEQVR4nO2ba3PqNhCGrYuPZUuWhC35EgwGDoGEJMf//99V5kzaJo0vMcVWO3q+BCZm5mW12l3tCs9zOBwOh8PhcDgcDofD4XA4HA6H4/8BwcSDV64v/wtgkuqizB7W64esLHRK8NKKBsFC7zMKJEMGJgHd7rWwXHaQXl6oQoiCKxQhRV8uaWCxk2BYAYUY22yrYuX7q6LcbhhDR1BBa40tVlsQKlrnPo5jbIgD7Oc1VSHYrsTS6r4m1jsaglOU/N2HsUiiEwjpTsfLKesm1i+KgwZ+DnImelSAqxcbVWN9VugcBV/9L4jOZm9q6/yaJE+Mv+oOzxX6ldNNYlsMCTIZgqhztwkNQpl9uQzL0YoC+x6vjffmga6FWAYCnxDNelefZBRtoE0OIgqEnlf9olfPCBUWmZrAA6VvXr9o743Sg0WmxsaKP7t34W9E9NOshkVhrwDosd/QrakfESjm0TMGaFa+GoxnQWV8CM6hZxTwAY0IZyYsorU1okkiOUgHvRUngEtrsiJZmcQxIpgJ81h/XJwR3IoekaKDVrQt4cOJnguSGjVjcp15zLfFpz1ojiz+cPTwAWfWRA8PXhQYroVEAdTFmjjteaU81sMZsT7Kcg414yARQJuh7ILTjcmb1niH0XNSrBgQLQqlTsOePyMlZVn/HiNJzahF3tHWQjsuo14r4kjynV2HxPhAEe3zapxSxA529WvaCo5uSaeDELKlYyrBeYnztofQpZqQtoOQ22XolgMIaYdqo5mG4DC3omFMdDDC6uSfQxaCk9p8odqeDP4XopUm1xp+ihDC02tpvk5qVeR4R8C67am/aRL8ueFwQHTFlNH8+bvYAoZ7cORs95incXAlTvPHF8oV2Ns7vyDB6hdjCAEAeFNVDTcvEGLs18rmSZEncFEroMIQUSkpCkPzpi48S13jHSISnZ+MhaXB/DnlOhE2m/k3BHsw1XlZVWWuU+h1p8nF+TgEJ0KYrRiLDza2bk4uUp0ONSChtipUE6y34DCQ8Uw83GqLjB3n56P60X8qIemFHc/W1EzE2wKuXvMBI2Jz3OJgO9TGngecZKbmeBoeyMZ6Y2qQLLEgN5Ika8tOf8S6x35bvg6cJeehrUjfxpUWGDZtjXpvRUMQYXwDVGODAhGVeTxbOEWK9pTVjBdBhLH1iBbaPRH6zGX9neEggbXk5yVbCWYTMrX5XtcI+xvFljx6kdwE6O9ePom1Ocjki8U9klIuy2/nOFFKTocqlbsRNJKPmgB8hEDAZbPQ3Q+ctIFgQjFxbews5NVxwyZ29uFJsWaR0unaJO/vlHZBihFN+LvQNskv0/YT9k9KLZFhiFdRWk50TFJSWi1QpGJ/PXwxpQsRvaKHBUYZOALoaWoIIMnT1P1wG3upsskRIM4UyP9NNeOADZPTT3zxXtJm/kEoZPyG6TzWAPHZRZNk5BC/4+NwiaR4vS4xveNFSHsjYe6dKDTgY+54dBGYj89+FBAR4OwW0WwZ0YjfIpqjnpvLd+Jm0ciJHocTPRet6DDAk1lsI4aJP5kkXEZ0iMANoL4fa9xLtKl4bmT+5EKS5vnHTTw383cR3n+ROh07BhkOh8PhcDgcDofD4XA4HA6Hw+FwjOUP4TNHyHvd+fEAAAAASUVORK5CYII="
            alt="user-dp"
            id="user-dp"
          />
          <span>John Doe</span>
        </div>
        <div className="nav-links">
          <ul>
            <li><Link to="/login"> Log in </Link></li>
            <li><Link to="/logout"> Log out </Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
