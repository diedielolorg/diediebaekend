/// <reference types="multer" />
import { Request } from 'express';
import { SearchService } from 'src/search/search.service';
import { CreateReportDto } from './dto/create-report.dto';
import { ReportsService } from './reports.service';
export declare class ReportsController {
    private readonly reportsService;
    private readonly searchService;
    constructor(reportsService: ReportsService, searchService: SearchService);
    getMatchUserInfo(summonerName: string, page: number): Promise<any>;
    createReportUsers(file: Express.Multer.File[], createReportDto: CreateReportDto, request: Request): Promise<any>;
    findAll(month: number): Promise<{
        data: import("./entities/report.entity").Reports[];
    }>;
    getUserInfoIngame(summonerName: string): Promise<any>;
}
