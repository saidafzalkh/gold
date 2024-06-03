import React, { ChangeEvent } from "react";
import { KTIcon, toAbsoluteUrl } from "../../../helpers";
import { useState } from "react";

type Props = {
    className?: string;
};

type Competition = {
    id: number;
    date: string;
    class: string;
    firstTeam: string;
    firstTeamImg: string;
    firstTeamPoint: string;
    secondTeam: string;
    secondTeamImg: string;
    secondTeamPoint: string;
    stage: string;
    status: string;
};

enum Status {
    All = "Все",
    Completed = "Завершен",
    Postponed = "Перенесён",
}
enum Stages {
    All = "Все",
    City = "Город",
    School = "Школа",
    District = "Район",
    Republic = "Республика",
    Village = "Село"
}


const TablesWidget14: React.FC<Props> = ({ className }) => {
    // Sample competitions data
    const competitions: Competition[] = [
        {
            id: 1,
            date: "10.12.23",
            class: "7-8 классы",
            firstTeam: "School Wolfs",
            firstTeamImg: "media/competitions/7.png",
            firstTeamPoint: "0",
            secondTeam: "Saifers",
            secondTeamImg: "media/competitions/8.png",
            secondTeamPoint: "0",
            stage: Stages.District,
            status: Status.Completed
        },
        {
            id: 2,
            date: "11.12.23",
            class: "5-6 классы",
            firstTeam: "Суперстары",
            firstTeamImg: "media/competitions/3.png",
            firstTeamPoint: "5",
            secondTeam: "Спортмены",
            secondTeamImg: "media/competitions/4.png",
            secondTeamPoint: "15",
            stage: Stages.School,
            status: Status.Completed
        },
        {
            id: 3,
            date: "06.12.23",
            class: "7-8 классы",
            firstTeam: "Иллиады",
            firstTeamImg: "media/competitions/11.png",
            firstTeamPoint: "14",
            secondTeam: "Royal Warriors",
            secondTeamImg: "media/competitions/12.png",
            secondTeamPoint: "14",
            stage: Stages.City,
            status: Status.Completed
        },
        {
            id: 4,
            date: "01.12.23",
            class: "9-11 классы",
            firstTeam: "Raiders",
            firstTeamImg: "media/competitions/11.png",
            firstTeamPoint: "6",
            secondTeam: "Смелые медведи",
            secondTeamImg: "media/competitions/12.png",
            secondTeamPoint: "10",
            stage: Stages.Village,
            status: Status.Completed
        },
        {
            id: 5,
            date: "12.12.23",
            class: "1-4 классы",
            firstTeam: "Грозные лисы",
            firstTeamImg: "media/competitions/1.png",
            firstTeamPoint: "12",
            secondTeam: "Грозные лисы",
            secondTeamImg: "media/competitions/2.png",
            secondTeamPoint: "4",
            stage: Stages.City,
            status: Status.Completed
        },
        {
            id: 6,
            date: "08.12.23",
            class: "1-4 классы",
            firstTeam: "Отважные волки",
            firstTeamImg: "media/competitions/9.png",
            firstTeamPoint: "0",
            secondTeam: "Суперстврф",
            secondTeamImg: "media/competitions/10.png",
            secondTeamPoint: "15",
            stage: Stages.Republic,
            status: Status.Completed
        },
        {
            id: 7,
            date: "11.12.23",
            class: "1-4 классы",
            firstTeam: "Отважные волки",
            firstTeamImg: "media/competitions/5.png",
            firstTeamPoint: "5",
            secondTeam: "Tigers Rogers",
            secondTeamImg: "media/competitions/6.png",
            secondTeamPoint: "15",
            stage: Stages.District,
            status: Status.Completed
        },
        // Add more course objects as needed
    ];

    return (
        <div className={`card ${className}`}>
            {/* ... Other parts of the component */}
            <div className="row">
                <div className="col-md-4">
                    <div className="p-10 w-100">
                        <h3>Басткебол</h3>
                        <div className="text-muted me-2 fs-6 fw-bold">
                            Найдено 15 соревнований
                        </div>
                    </div>
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-2">
                    <div className="p-9 flex items-center">
                        <div className="d-flex">
                            <div className="text-muted fs-6 fw-bold">
                                Этап
                            </div>
                            <select className="border-0 appearance-auto">
                                <option disabled defaultValue={Stages.All}>
                                    {"Выберите этап"}
                                </option>
                                {Object.values(Stages)?.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="p-9 flex items-center">
                        <div className="d-flex">
                            <div className="text-muted fs-6 fw-bold">
                                Статус
                            </div>
                            <select className="border-0 appearance-auto">
                                <option disabled defaultValue={Status.All}>
                                    {"Выберите статус"}
                                </option>
                                {Object.values(Status)?.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-body py-3">
                <div className="table-responsive">
                    <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                        <thead>
                            <tr className="fw-bold text-muted">
                                <th className="min-w-60px">Дата</th>
                                <th className="min-w-60px">Классы</th>
                                <th className="min-w-150px text-center" colSpan={3}>Команда</th>
                                <th className="min-w-120px">Этап</th>
                                <th className="min-w-100px text-center">Статус</th>
                            </tr>
                        </thead>
                        <tbody>
                            {competitions.map((competition) => (
                                <tr key={competition.id}>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <div className="d-flex justify-content-start flex-column">
                                                <a href="#" className="text-gray-900 fw-bold text-hover-primary fs-6">
                                                    {competition.date}
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <a href="#" className="text-gray-900 fw-bold text-hover-primary d-block fs-6t">
                                            {competition.class}
                                        </a>
                                    </td>
                                    <td>
                                        <div className="d-flex w-100 justify-content-end">
                                            <div className="d-flex flex-stack mb-2">
                                                <div className="text-muted me-2 fs-6 fw-bold">
                                                    {competition.firstTeam}
                                                </div>
                                            </div>
                                            <div className="d-flex flex-stack mb-2">
                                                <div className="symbol symbol-45px me-5">
                                                    <img className="w-35 h-35" src={toAbsoluteUrl(competition.firstTeamImg)} alt="Team" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex w-100 justify-content-center">
                                            <div className="d-flex flex-stack mb-2">
                                                <div className="fs-6 fw-bold">
                                                    {competition.firstTeamPoint} - {competition.secondTeamPoint}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex w-100 justify-content-start">
                                            <div className="d-flex flex-stack mb-2">
                                                <div className="symbol symbol-45px me-5">
                                                    <img style={{ width: "35px", height: "35px" }} className="w-35 h-35" src={toAbsoluteUrl(competition.secondTeamImg)} alt="Team" />
                                                </div>
                                            </div>
                                            <div className="d-flex flex-stack mb-2">
                                                <div className="text-muted me-2 fs-6 fw-bold">
                                                    {competition.secondTeam}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <a href="#" className="text-muted fw-bold text-hover-primary d-block fs-6">
                                            {competition.stage}
                                        </a>
                                    </td>
                                    <td>
                                        <a href="#" className="d-flex justify-content-center">
                                            <div className="badge badge-light-primary text-hover-primary fs-7 p-3">{competition.status}</div>
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

export { TablesWidget14 };