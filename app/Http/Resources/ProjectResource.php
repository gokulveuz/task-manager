<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'created_at' => Carbon::parse($this->created_at)->format("Y-m-d H:i:s"),
            'updated_at' => Carbon::parse($this->updated_at)->format("Y-m-d H:i:s"),
            'due_date' => Carbon::parse($this->due_date)->format("Y-m-d H:i:s"),
            'status' => $this->status,
            'imagePath' => $this->image_path,
            'createdBy' => new UserResource($this->createdBy),
            'updatedBy' => new UserResource($this->updatedBy)
        ];
    }
}
