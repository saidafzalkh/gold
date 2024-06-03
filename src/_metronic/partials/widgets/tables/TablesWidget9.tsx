import React from "react";
import { KTIcon, toAbsoluteUrl } from "../../../helpers";

type Props = {
  className?: string;
};

type Course = {
  id: number;
  name: string;
  avatarSrc: string;
  skills: string;
  date: string;
  progress: number;
  format: string;
};

const TablesWidget9: React.FC<Props> = ({ className }) => {
  // Sample courses data
  const courses: Course[] = [
    {
      id: 1,
      name: "Инновационные методики в обучении",
      avatarSrc: "media/books/1.png",
      skills: "HTML, JS, ReactJS",
      date: "Янв 20, 2023",
      progress: 50,
      format: "Онлайн",
    },
    {
      id: 2,
      name: "Jessie Clarcson",
      avatarSrc: "media/books/2.png",
      skills: "C#, ASP.NET, MS SQL",
      date: "Agoda",
      progress: 70,
      format: "Онлайн",
    },
    {
      id: 3,
      name: "Lebron Wayde",
      avatarSrc: "media/books/3.png",
      skills: "PHP, Laravel, VueJS",
      date: "RoadGee",
      progress: 60,
      format: "Онлайн",
    },
    {
      id: 4,
      name: "Natali Goodwin",
      avatarSrc: "media/books/4.png",
      skills: "Python, PostgreSQL, ReactJS",
      date: "The Hill",
      progress: 50,
      format: "Онлайн",
    },
    {
      id: 5,
      name: "Kevin Leonard",
      avatarSrc: "media/books/5.png",
      skills: "HTML, JS, ReactJS",
      date: "RoadGee",
      progress: 90,
      format: "Онлайн",
    },
    {
      id: 6,
      name: "Kevin Leonard",
      avatarSrc: "media/books/6.png",
      skills: "HTML, JS, ReactJS",
      date: "RoadGee",
      progress: 90,
      format: "Онлайн",
    },
    {
      id: 7,
      name: "Kevin Leonard",
      avatarSrc: "media/books/7.png",
      skills: "HTML, JS, ReactJS",
      date: "RoadGee",
      progress: 90,
      format: "Онлайн",
    },
    // Add more course objects as needed
  ];

  const getColor = (percent: number) => {
    if (percent < 10) {
      return "bg-light";
    }
    if (percent < 30) {
      return "bg-secondary";
    }
    if (percent < 60) {
      return "bg-primary";
    }
    if (percent < 80) {
      return "bg-warning";
    } else {
      return "bg-success";
    }
  };

  const getBadgeColor = (percent: number) => {
    if (percent < 10) {
      return "badge-light";
    }
    if (percent < 30) {
      return "badge-light-secondary";
    }
    if (percent < 60) {
      return "badge-light-primary";
    }
    if (percent < 80) {
      return "badge-light-warning";
    } else {
      return "badge-light-success";
    }
  };

  return (
    <div className={`card ${className}`}>
      {/* ... Other parts of the component */}
      <div className="card-body py-3">
        <div className="table-responsive">
          <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
            <thead>
              <tr className="fw-bold text-muted">
                <th className="w-25px">
                  <div className="form-check form-check-sm form-check-custom form-check-solid">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="1"
                      data-kt-check="true"
                      data-kt-check-target=".widget-9-check"
                    />
                  </div>
                </th>
                <th className="min-w-150px">Наименование</th>
                <th className="min-w-140px">Дата проведения</th>
                <th className="min-w-120px">Пройдено</th>
                <th className="min-w-100px text-end">Формат</th>
                <th className="min-w-100px text-end">О курсе</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id}>
                  <td>
                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                      <input
                        className="form-check-input widget-9-check"
                        type="checkbox"
                        value="1"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-45px me-5">
                        <img src={toAbsoluteUrl(course.avatarSrc)} alt="" />
                      </div>
                      <div className="d-flex justify-content-start flex-column">
                        <a
                          href="#"
                          className="text-gray-900 fw-bold text-hover-primary fs-6"
                        >
                          {course.name}
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <a
                      href="#"
                      className="text-gray-900 fw-bold text-hover-primary d-block fs-6"
                    >
                      {course.date}
                    </a>
                  </td>
                  <td className="text-end">
                    <div className="d-flex flex-column w-100 me-2">
                      <div className="d-flex flex-stack mb-2">
                        <span className="text-muted me-2 fs-7 fw-semibold">
                          {course.progress}
                        </span>
                      </div>
                      <div className="progress h-6px">
                        <div
                          className={`progress-bar ${getColor(
                            course.progress
                          )}`}
                          role="progressbar"
                          style={{ width: course.progress }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="min-w-125px pe-2">
                      <span
                        className={`badge ${getBadgeColor(course.progress)}`}
                      >
                        {" "}
                        {course.format}
                      </span>
                    </div>
                  </td>
                  <td className="text-end">
                    <a
                      href="#"
                      className="btn btn-secondary fw-bold text-hover-primary d-block fs-6"
                    >
                      Смотреть
                    </a>
                  </td>
                  {/* Add more columns if necessary */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export { TablesWidget9 };
